import { Module } from '@nestjs/common';
import { AlgoliaService } from './algolia.service';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';

@Module({
    providers:[AlgoliaService,PrismaService,RedisService],
    exports:[AlgoliaService,PrismaService,RedisService]
})
export class CoreModule {}
