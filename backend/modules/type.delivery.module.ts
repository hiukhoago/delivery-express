/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TypeDelivery } from 'entities/type.delivery.entity';
import { TypeDeliveryController } from '../controllers/type.deliver.controller';
import { TypeDeliveryService } from 'services/type.delivery.service';
import { TypeDeliveryMapper } from 'services/mappers/type.delivery.mapper';

@Module({
    imports: [MikroOrmModule.forFeature([TypeDelivery])],
    controllers: [TypeDeliveryController],
    providers: [TypeDeliveryService,TypeDeliveryMapper],
})
export class TypeDeliveryModule {}
