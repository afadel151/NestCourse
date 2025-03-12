import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationsService {
    constructor(private prismaService: PrismaService) { }
    async getUserApplications(user: any) {
        const Applications = await this.prismaService.application.findMany({
            where: {
                OR: [
                    { freelancerId: user.sub },
                ]
            },
            select: {
                coverLetter: true,
                status: true,
                createdAt: true,
                job: {
                    select: {
                        title: true,
                        description: true,
                        budget: true,
                        status: true,
                    }
                },
                
            }
        });
        if (!Applications) {
            throw new Error('User not found');
        }
        return Applications;
    }
}
