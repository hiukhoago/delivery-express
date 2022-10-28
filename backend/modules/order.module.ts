/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { OrderController } from 'controllers/order.controller';
import { OrderService } from 'services/order.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Order } from 'entities/order.entity';
import { OrderMapper } from '../services/mappers/order.mapper';

@Module({
    imports: [MikroOrmModule.forFeature([Order])],
    controllers: [OrderController],
    providers: [OrderService,OrderMapper],
    exports: [OrderService],
})
export class OrderModule {}
