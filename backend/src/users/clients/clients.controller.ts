import { Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JobsService } from 'src/work/jobs/jobs.service';

@Controller('clients')
export class ClientsController {
    constructor(private ClientsService: ClientsService) {}
    @Get('profile')
    getProfile() {
        // return this.ClientsService.getProfile();
    }

    @Get(':id')
    getClientById() {
        // return this.ClientsService.getClientById();
    }

    @Post('jobs')
    addJob(){}
}