import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [JwtModule.register({
    secret: new ConfigService().get<string>('JWT_SECRET'),
     global: true,
     signOptions: { expiresIn: '600s' }
  })],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
