import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prismaService : PrismaService) {}
    async getProfile(user: any)
    {
        const userRecord = await this.prismaService.user.findUnique({
            where: {    
                email: user.email,
            },
            include: {
                jobs: true,
                applications: true, // Include user's applications
                reviewsReceived: true, // Include user's received reviews
            },
        });

        if (!userRecord) {
            throw new Error('User not found');
        }

        let { id,password, ...fetchedUser} = userRecord;
        return fetchedUser;
    }
    async getUserDetails(user: any){
        const userRecord = await this.prismaService.user.findUnique({
            where: {    
                email: user.email,
            }
        });

        if (!userRecord) {
            throw new Error('User not found');
        }

        let { id,password,skills,bio,avatar,createdAt,updatedAt, ...fetchedUser} = userRecord;
        return fetchedUser;
    }
    async deleteAccount(user: any)
    {
        const userRecord = await this.prismaService.user.findUnique({
            where: {    
                email: user.email,
            }
        });
        if (!userRecord) {
            throw new Error('User not found');
        }
        try {
            const result = await this.prismaService.user.delete({
                where: {    
                    email: user.email,
                }
            });
            return response.sendStatus(300)
        } catch (error) {
            throw error
        }

    }
}
