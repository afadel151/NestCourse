import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [ConfigModule,UsersModule, PrismaModule, JwtModule.register({
    secret: new ConfigService().get<string>('JWT_SECRET'),
     global: true,
     signOptions: { expiresIn: '60s' }
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }