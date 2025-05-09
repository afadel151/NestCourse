import { IsNotEmpty, IsString, IsInt, IsRFC3339, IsObject } from "class-validator";

import type { UserDto } from "./user.dto";
import { JobDto } from "./job.dto";

export class ReviewDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsInt()
    rating!: number;

    @IsString()
    comment!: string | null;

    @IsString()
    @IsNotEmpty()
    jobId!: string;

    @IsObject()
    job!: JobDto  | null;


    @IsString()
    @IsNotEmpty()
    freelancerId!: string;

    @IsObject()
    freelancer!: UserDto  | null ;

    @IsString()
    @IsNotEmpty()
    clientId!: string;

    @IsObject()
    client!: UserDto  | null;

    @IsRFC3339()
    createdAt!: string;
}
