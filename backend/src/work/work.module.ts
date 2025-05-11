import { Module } from '@nestjs/common';

import { AlgoliaService } from '../core/algolia/algolia.service';

import { ApplicationsService } from './applications/applications.service';
import { ApplicationsController } from './applications/applications.controller';
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [JobsController,ApplicationsController],
  providers: [JobsService,AlgoliaService,ApplicationsService,PrismaService],
})
export class WorkModule {
    
}
