import { RateController } from './../controllers/rate.controller';
/*
https://docs.nestjs.com/modules
*/

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Rate } from 'entities/rate.entity';
import { RateService } from 'services/rate.service';
import { RateMapper } from 'services/mappers/rate.mapper';


//entitiy tuc la bang trong mongodb
@Module({
    imports: [MikroOrmModule.forFeature([Rate])],
    controllers: [RateController],
    providers: [RateService,RateMapper],
})
export class RateModule { }
