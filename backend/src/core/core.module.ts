import { Module } from '@nestjs/common';
import { AlgoliaService } from './algolia/algolia.service';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';

@Module({
    providers:[AlgoliaService,PrismaService,RedisService],
    exports:[AlgoliaService,PrismaService,RedisService]
})
export class CoreModule {}
