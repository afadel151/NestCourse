import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ReviewsService } from './reviews/reviews.service';
import { ReportsService } from './reports/reports.service';
import { NotificationsService } from './notifications/notifications.service';
import { MessagesService } from './messages/messages.service';
import { MessagesController } from './messages/messages.controller';
import { NotificationsController } from './notifications/notifications.controller';
import { ReportsController } from './reports/reports.controller';
import { ReviewsController } from './reviews/reviews.controller';

@Module({
    providers:[PrismaService,ReviewsService,ReportsService,NotificationsService,MessagesService],
    controllers:[MessagesController,NotificationsController,ReportsController,ReviewsController],
})
export class CommunicationModule {}
