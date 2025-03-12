import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobsService {
    constructor(private prismaService: PrismaService) {}
    async getUserJobs(user: any)
    {
       
        const Jobs = await this.prismaService.job.findMany({
            where: {
                OR: [
                    { clientId: user.sub }, 
                    { hiredFreelancerId: user.sub } 
                ]
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
                client: {
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
        // return fetchedUser;
    }
}
