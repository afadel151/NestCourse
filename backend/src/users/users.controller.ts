import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }
}
