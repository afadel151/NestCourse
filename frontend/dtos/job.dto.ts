import { IsNotEmpty, IsString, IsNumber, IsEnum, IsRFC3339, IsArray, IsObject } from "class-validator";
import type { UserDto } from "./user.dto";
import type { ApplicationDto } from "./application.dto";
import type { ReviewDto } from "./review.dto";
import type { PaymentDto } from "./payment.dto";

enum JobStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class JobDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNumber()
    budget!: number;

    @IsEnum(JobStatus)
    status!: JobStatus;

    @IsRFC3339()
    createdAt!: string;

    @IsString()
    clientId!: string;


    @IsObject()
    client!: UserDto | null;

    @IsString()
    hiredFreelancerId!: string | null;


    @IsObject()
    freelancer!: UserDto | null;

    @IsArray()
    applications!: ApplicationDto[] | null;

    @IsArray()
    reviews!: ReviewDto[] | null;

    @IsArray()
    payments!: PaymentDto[] | null;
}
