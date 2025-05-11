import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
@Injectable()
export class ClientsService {
    // Add your service methods here
    // For example:
    constructor(private prismaService : PrismaService) {}
    getClients() {
        return [];
    }
    
    getClientById(id: string) {
        return { id };
    }
    
    createClient(clientData: any) {
        return clientData;
    }
    
    updateClient(id: string, clientData: any) {
        return { id, ...clientData };
    }
    
    deleteClient(id: string) {
        return { id };
    }  
}