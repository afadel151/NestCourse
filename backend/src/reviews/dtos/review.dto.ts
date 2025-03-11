import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ReviewDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
