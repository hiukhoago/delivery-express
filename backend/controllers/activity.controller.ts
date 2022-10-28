/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Put, Delete, Param, Query, Post, Body, Req, ClassSerializerInterceptor, UseInterceptors, Patch, UseGuards } from '@nestjs/common';
import { Activity } from 'entities/activity.entity';
import { Query as iQuery } from 'entities/shared/interface';
import { AuthGuard, AuthUser } from 'security';
import { Payload } from 'security/payload';
import { ActivityService } from 'services/activity.service';
import { ActivityDTO } from 'services/dtobjects/activity.dto';
import { Controller as _Controller } from './supports/base.controller'
import { Source } from './supports/source.decorator';

@Controller(['activity', 'activities'])
export class ActivityController extends _Controller<Activity, ActivityDTO> {

    constructor(readonly service: ActivityService) {
        super(service)
    }

    @Get()
    @UseGuards(AuthGuard)
    find(@Query() query: iQuery, @AuthUser() user?: Payload, @Source() source?: string): Promise<ActivityDTO[]> {
        return this.service.find(query, user, source)
    }
    findOne(id: string | number): Promise<ActivityDTO> {
        throw new Error('Method not implemented.');
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() dto: ActivityDTO, @AuthUser() user?: Payload, @Source() source?: string): Promise<ActivityDTO> {
        return await this.service.create(dto, user, source)
    }

    update(id: string | number, dto: ActivityDTO): Promise<ActivityDTO> {
        throw new Error('Method not implemented.');
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ActivityDTO, @AuthUser() payload?: Payload, @Source() source?: string): Promise<ActivityDTO> {
        return this.service.patch(id, dto, payload, source)
    }


    delete(id: string | number): Promise<number> {
        throw new Error('Method not implemented.');
    }

}
