import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { Job } from 'src/decorators/job.decorator';
import { UUID } from 'crypto';

@UseGuards(AuthGuard)
@Controller('jobs')
export class JobsController {
    constructor(private jobService : JobsService) {}
    @Get('user')
    getUserJobs(@User() user: any)
    {
        return this.jobService.getUserJobs(user);
    }
    
    @Post('add')
    addJobOffer(@Job() dto: any,@User() user : any)
    {

        
        return this.jobService.addJobOffer(dto,user);
    }

    @Get('get_my_job')
    getMyJob(@Query() job_id : UUID,@User() user: any)
    {   
        return this.jobService.getMyJob(job_id,user)
    }

    @Post('edit')
    editJobOffer(@Job() dto: any,@User() user : any)
    {
        return this.jobService.editJobOffer(dto,user);
    }
    
}
