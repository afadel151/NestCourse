import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private UserService: UsersService) {}
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@User() user: any) {
        return this.UserService.getProfile(user);
    }
}
