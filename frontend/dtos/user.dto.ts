
import { IsEmail, isEnum, IsNotEmpty, IsRFC3339, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    avatar!: string;

    @IsString()
    bio!: string;

    @IsRFC3339()
    createdAt!: string;

    @IsString()
    firstName!: string;

    @IsString()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    role!: string;
    
}
