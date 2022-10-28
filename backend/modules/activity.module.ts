/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Activity } from 'entities/activity.entity';
import { ActivityService } from 'services/activity.service';
import { ActivityController } from 'controllers/activity.controller';
import { ActivityMapper } from 'services/mappers/activity.mapper';

@Module({
    imports: [MikroOrmModule.forFeature([Activity])],
    controllers: [ActivityController],
    providers: [ActivityService,ActivityMapper],
    exports: [ActivityService],
})
export class ActivityModule {}
