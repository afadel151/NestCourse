import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobDto } from './dtos/job.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class JobsService {
    constructor(private prismaService: PrismaService) { }
    async getUserJobs(user: any) {

        const Jobs = await this.prismaService.job.findMany({
            where: {
                clientId: user.sub
            },
            select: {
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
    async addJobOffer(dto: JobDto,user : any) {
        
        try {
            const Job = await this.prismaService.job.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    budget: parseFloat(dto.budget.toString()),
                    clientId: user.sub,
                },
            });
            const {id, ...createdJob} = Job;
            return createdJob;
        } catch (error) {
            throw error;
        }
    }
}
