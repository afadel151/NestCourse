import { Module } from '@nestjs/common';
import { PaymentsController } from './payments/payments.controller';
import { SubscriptionsController } from './subscriptions/subscriptions.controller';

@Module({
    controllers: [PaymentsController,SubscriptionsController],
    providers: [],
    exports: []
})
export class BillingModule {
    
}
