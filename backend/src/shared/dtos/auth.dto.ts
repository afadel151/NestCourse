import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(['CLIENT', 'FREELANCER'])
    role?: string;
}
