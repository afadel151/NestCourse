import { Controller, Get,Put, UseGuards, Delete } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UsersService } from './users.service';
import { updateDto } from '../shared/dtos/user.dto';
@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private UserService: UsersService) {}
   
    @Get('profile')
    getProfile(@User() user: any) {
        return this.UserService.getProfile(user);
    }

    @Delete('profile')
    deleteProfile(@User() user: any){
        return this.UserService.deleteAccount(user)
    }
    @Get('details')
    getUserDetails(@User() user: any)
    {
        return this.UserService.getUserDetails(user);
    }

    @Put('profile')
    updateProfileInfos(@User() user: any,dto: updateDto){
        // return this.UserService
    }
}
