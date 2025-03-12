import { Controller, Get, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';

@UseGuards(AuthGuard)
@Controller('jobs')
export class JobsController {
    constructor(private jobService : JobsService) {}
    @Get('user')
    getUserJobs(@User() user: any)
    {
        return this.jobService.getUserJobs(user);
    }
}
