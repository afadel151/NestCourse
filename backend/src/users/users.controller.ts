import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('users')
export class UsersController {

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@User() user : any) {
        return user;
    }
}
