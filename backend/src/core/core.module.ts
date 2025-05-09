import { Module } from '@nestjs/common';
import { AlgoliaService } from './algolia.service';
import { PrismaService } from './prisma.service';

@Module({
    exports:[AlgoliaService,PrismaService]
})
export class CoreModule {}
