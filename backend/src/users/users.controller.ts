import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UsersService } from './users.service';
@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private UserService: UsersService) {}
   
    @Get('profile')
    getProfile(@User() user: any) {
        return this.UserService.getProfile(user);
    }
    @Get('details')
    getUserDetails(@User() user: any)
    {
        return this.UserService.getUserDetails(user);
    }

}
