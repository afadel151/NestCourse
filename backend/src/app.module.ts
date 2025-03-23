import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { PaymentsModule } from './payments/payments.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersController } from './users/users.controller';


@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true}), PrismaModule, UsersModule,  JobsModule, ApplicationsModule, PaymentsModule, ReviewsModule],

})
export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  // }
 }
