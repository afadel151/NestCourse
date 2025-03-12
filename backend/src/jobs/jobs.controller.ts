import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { JobDto } from './dtos/job.dto';
import { Job } from 'src/decorators/job.decorator';

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
        console.log(dto,user);
        
        return this.jobService.addJobOffer(dto,user);
    }
}
