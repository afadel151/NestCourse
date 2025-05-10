import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AuthModule } from './users/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { JobsModule } from './work/work.module';
import { PaymentsModule } from './billing/payments/payments.module';
import { BillingModule } from './billing/billing.module';
import { CoreModule } from './core/core.module';


@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true}), UsersModule,  JobsModule, PaymentsModule, BillingModule, CoreModule],
  
})
export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  // }
 }
