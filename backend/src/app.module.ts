import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AuthModule } from './users/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { JobsModule } from './work/work.module';
import { PaymentsModule } from './billing/payments/payments.module';
import { FeedbackModule } from './feedback/feedback.module';
import { BillingModule } from './billing/billing.module';
import { CoreModule } from './core/core.module';


@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true}), PrismaModule, UsersModule,  JobsModule, PaymentsModule, FeedbackModule, FeedbackModule, BillingModule, CoreModule],
  
})
export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  // }
 }
