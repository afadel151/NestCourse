import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobDto } from './dtos/job.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UUID } from 'crypto';
import { Job } from 'src/decorators/job.decorator';
import { JobStatus } from '@prisma/client';

@Injectable()
export class JobsService {
    constructor(private prismaService: PrismaService) { }
    getStatus(status: string) {
        return JobStatus[status as keyof typeof JobStatus];
    }
    async getUserJobs(user: any) {

        const Jobs = await this.prismaService.job.findMany({
            where: {
                clientId: user.sub
            },
            select: {
                id:true,
                title: true,
                description: true,
                budget: true,
                status: true,
                createdAt: true,
                applications: {
                    select: {
                        coverLetter: true,
                        status: true
                    }
                },
                hiredFreelancer: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                },

                reviews: {
                    select: {
                        rating: true,
                        comment: true
                    }
                }
            }
        });
        if (!Jobs) {
            throw new Error('User not found');
        }
        return Jobs;
    }
    async addJobOffer(dto: JobDto, user: any) {

        try {
            const Job = await this.prismaService.job.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    budget: parseFloat(dto.budget.toString()),
                    clientId: user.sub,
                },
            });
            const { id, ...createdJob } = Job;
            return createdJob;
        } catch (error) {
            throw error;
        }
    }
    async getMyJob(jobId: any, user: any) {
        
        try {
            const Job = await this.prismaService.job.findFirst({
                where: {
                    id: jobId.job_id,
                    clientId: user.sub
                },
                select: {
                    id:true,
                    title: true,
                    description: true,
                    budget: true,
                    status: true,
                    createdAt: true,
                    applications: {
                        select: {
                            jobId: true,
                            coverLetter: true,
                            status: true,
                            freelancer: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    email: true,
                                }
                            }
                        }
                    },
                    hiredFreelancer: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true,
                        }
                    },
                    reviews: {
                        select: {
                            rating: true,
                            comment: true,
                            freelancer: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    email: true,
                                }
                            },
                            client: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    email: true,
                                }
                            }
                        }
                    }
                }
            })
            console.log("Job Data Retrieved:", JSON.stringify(Job, null, 2));
            return Job
        } catch (error) {
            throw error
        }
    }
    async editJobOffer(dto: JobDto, user: any) {
        console.log("Edit Job DTO:", dto);
        console.log("User:", user);
        const job = this.prismaService.job.update({
            where: {
                id: dto.id,
                clientId: user.sub
            },
            data: {
                title: dto.title,
                description: dto.description,
                budget: parseFloat(dto.budget.toString()),
                status: dto.status,
            }
        });
        return job;
    }
}
