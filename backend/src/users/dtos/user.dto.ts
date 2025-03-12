
import { IsAlphanumeric, IsArray, IsEmail, IsEnum, IsNotEmpty, IsRFC3339, IsString } from "class-validator";
import type { ApplicationDto } from "../../applications/dtos/application.dto";
import type { ReviewDto } from "../../reviews/dtos/review.dto";
import type { JobDto } from "../../jobs/dtos/job.dto";
enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    BLOGGER = "BLOGGER"
}

export class UserDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    avatar!: string | null;

    @IsString()
    bio!: string;

    @IsRFC3339()
    createdAt!: string;

    @IsRFC3339()
    updatedAt!: string;

    @IsString()
    firstName!: string;

    @IsString()
    lastName!: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role!: string ;


    @IsArray()
    skills!: string[] ;

    @IsArray()
    applications!: ApplicationDto[]  | null ;

    @IsArray()
    reviewsReceived!: ReviewDto[]  | null ;

    @IsArray()
    jobs!: JobDto[]  | null ;

}
