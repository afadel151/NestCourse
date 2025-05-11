import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AuthController } from './auth/auth.controller';
import { ClientsService } from './clients/clients.service';
import { FreelancersService } from './freelancers/freelancers.service';
import { AdminsService } from './admins/admins.service';
import { ClientsController } from './clients/clients.controller';
import { FreelancersController } from './freelancers/freelancers.controller';
import { AdminsController } from './admins/admins.controller';
import { WorkModule } from 'src/work/work.module';
import { JobsService } from 'src/work/jobs/jobs.service';

@Module({
  imports: [JwtModule.register({
    secret: new ConfigService().get<string>('JWT_SECRET'),
     global: true,
     signOptions: { expiresIn: '7d' }
  }),ConfigModule,WorkModule],
  providers: [UsersService,AuthService,PrismaService,ClientsService,FreelancersService,AdminsService],
  exports: [UsersService],
  controllers: [UsersController,AuthController,ClientsController,FreelancersController,AdminsController]
})
export class UsersModule {}
