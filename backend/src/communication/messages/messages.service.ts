import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
@Injectable()
export class MessagesService {
    constructor(private prismaService : PrismaService) {}
   
}