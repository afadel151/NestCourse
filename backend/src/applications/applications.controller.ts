import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
@UseGuards(AuthGuard)
@Controller('applications')
export class ApplicationsController {
    constructor(private applicationService: ApplicationsService) {}
    @Get('user')
    getUserApplications(@User() user: any) {
        return this.applicationService.getUserApplications(user);
    }
}
