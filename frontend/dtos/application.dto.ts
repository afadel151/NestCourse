import { IsNotEmpty, IsString, IsEnum, IsRFC3339, IsObject, IsOptional } from "class-validator";
import type { JobDto } from "./job.dto";
import type { UserDto } from "./user.dto";

export enum ApplicationStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

export class ApplicationDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    freelancerId!: string;

    @IsObject()
    freelancer!: UserDto | null;


    @IsString()
    @IsNotEmpty()
    jobId!: string;

    @IsObject()
    job!: JobDto  | null;

    @IsString()
    coverLetter!: string | null;

    @IsEnum(ApplicationStatus)
    status!: ApplicationStatus;

    @IsRFC3339()
    createdAt!: string;
}
