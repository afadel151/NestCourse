import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { WorkModule } from './work/work.module';
import { BillingModule } from './billing/billing.module';
import { CoreModule } from './core/core.module';
import { CommunicationModule } from './communication/communication.module';


@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true}), UsersModule,  WorkModule, BillingModule, CoreModule,CommunicationModule],
  
})
export class AppModule  {
  
}
