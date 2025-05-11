import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
@Injectable()
export class FreelancersService {
    constructor(private prismaService : PrismaService) {}
    // Add your service methods here
    // For example:
    getFreelancers() {
        return 'List of freelancers';
    }
    
    getFreelancerById(id: string) {
        return `Freelancer with ID: ${id}`;
    }
    
    createFreelancer(data: any) {
        return 'Freelancer created';
    }
    
    updateFreelancer(id: string, data: any) {
        return `Freelancer with ID: ${id} updated`;
    }
    
    deleteFreelancer(id: string) {
        return `Freelancer with ID: ${id} deleted`;
    }
   
}