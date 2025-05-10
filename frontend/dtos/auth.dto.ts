
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    firstName!: string;


    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsOptional()
    @Matches(/password/, { message: 'Passwords do not match' })
    confirmPassword?: string;

    @IsEnum(['CLIENT', 'FREELANCER'])
    role?: string;
}
