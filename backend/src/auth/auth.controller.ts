import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/shared/dtos/auth.dto";

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) { }
    @Get('/')
    index(){
        return 'This is the auth page';
    }
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }

    
}