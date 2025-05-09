import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { AlgoliaService } from '../core/algolia.service';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';

@Module({
  controllers: [JobsController,ApplicationsController],
  providers: [JobsService,AlgoliaService,ApplicationsService]
})
export class JobsModule {}
