import { IsNotEmpty, IsString, IsNumber, IsEnum, IsRFC3339, IsObject } from "class-validator";
import type { UserDto } from "./user.dto";
import { JobDto } from "./job.dto";

enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    REFUNDED = "REFUNDED"
}

export class PaymentDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsNumber()
    amount!: number;

    @IsEnum(PaymentStatus)
    status!: PaymentStatus;

    @IsString()
    @IsNotEmpty()
    jobId!: string;

    @IsObject()
    job!: JobDto | null;

    @IsString()
    @IsNotEmpty()
    freelancerId!: string;

    @IsObject()
    freelancer!: UserDto | null;

    @IsString()
    @IsNotEmpty()
    clientId!: string;

    @IsObject()
    client!: UserDto | null;

    @IsRFC3339()
    createdAt!: string;
}
