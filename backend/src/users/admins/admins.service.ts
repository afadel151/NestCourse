import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
@Injectable()
export class AdminsService {
    constructor(private prismaService : PrismaService) {}
    // Add your service methods here
    // For example:
}