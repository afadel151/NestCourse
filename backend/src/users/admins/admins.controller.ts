import { Controller, Get } from '@nestjs/common';

@Controller('admins')
export class AdminsController {
    @Get('profile')
    getProfile(){

    }
    @Get('dashboard')
    getDashboard(){

    }



}