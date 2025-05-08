import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { AlgoliaService } from './algolia.service';

@Module({
  controllers: [JobsController],
  providers: [JobsService,AlgoliaService]
})
export class JobsModule {}
