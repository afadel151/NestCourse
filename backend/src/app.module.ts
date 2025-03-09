import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true}), BookmarkModule, PrismaModule, UsersModule],

})
export class AppModule { }
