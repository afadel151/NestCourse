import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ApplicationsService } from './applications.service';
@UseGuards(AuthGuard)
@Controller('applications')
export class ApplicationsController {
    constructor(private applicationService: ApplicationsService) {}
    @Get('user')
    getUserApplications(@User() user: any) {
        return this.applicationService.getUserApplications(user);
    }

    @Get('recent')
    getRecentApplications(@User() user: any) {
        return this.applicationService.getRecentApplications(user);
    }
}
