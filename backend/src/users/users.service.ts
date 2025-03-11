import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prismaService : PrismaService) {}
    async getProfile(user: any)
    {
        const userRecord = await this.prismaService.user.findUnique({
            where: {    
                email: user.email,
            },
        });

        if (!userRecord) {
            throw new Error('User not found');
        }

        let { id,password, ...fetchedUser} = userRecord;
        return fetchedUser;
    }
}
