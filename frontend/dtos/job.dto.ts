import { IsNotEmpty, IsString, IsNumber, IsEnum, IsRFC3339, IsArray, IsObject, IsOptional } from "class-validator";
import type { UserDto } from "./user.dto";
import type { ApplicationDto } from "./application.dto";
import type { ReviewDto } from "./review.dto";
import type { PaymentDto } from "./payment.dto";

export enum JobStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class JobDto {
    constructor();
    constructor(Job: JobDto);
    constructor(Job?: JobDto) {
        if (Job) {
            this.title = Job.title;
            this.description = Job.description;
            this.budget = Job.budget;
            this.status = JobStatus.OPEN;
        } else {
            this.status = JobStatus.OPEN; // Ensure the default value is set
        }

        
    }

    
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
    @IsOptional()
    budget!: number;

    @IsEnum(JobStatus)
    status!: JobStatus ;

    @IsRFC3339()
    createdAt!: string | null;

    @IsString()
    clientId!: string | null;


    @IsObject()
    client!: UserDto | null;

    @IsString()
    hiredFreelancerId!: string | null;


    @IsObject()
    hiredFreelancer!: UserDto | null;

    @IsArray()
    applications!: ApplicationDto[] | null;

    @IsArray()
    reviews!: ReviewDto[] | null;

    @IsArray()
    payments!: PaymentDto[] | null;
}
