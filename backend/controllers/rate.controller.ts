/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Rate } from 'entities/rate.entity';
import { Query as iQuery } from 'entities/shared/interface';
import { RateDTO } from 'services/dtobjects/rate.dto';
import { RateService } from 'services/rate.service';
import { Controller as _Controller } from './supports/base.controller'
import { UseGuards } from '@nestjs/common';
import { AuthGuard, AuthUser } from 'security';
import { Payload } from 'security/payload';
import { Source } from './supports/source.decorator';
import { Query as IQuery } from 'entities/shared/interface';

@Controller(['rate','rates'])
export class RateController extends _Controller<Rate,RateDTO> {

    constructor(readonly service: RateService) { 
        super(service)
    }

    @Get()
    @UseGuards(AuthGuard)
    async find(@Query() query: IQuery, @AuthUser() user?: Payload,@Source() source? : string): Promise<RateDTO[]> {
        return this.service.find(query,user,source)
    }

    @Get(':id')
    findOne(@Param('id') id: any): Promise<RateDTO> {
        return this.service.findOne(+id)
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() dto: RateDTO,@AuthUser() user?: Payload): Promise<RateDTO> {
        return await this.service.create(dto,user)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: RateDTO): Promise<RateDTO> {
        return await this.service.update(id, dto)
    }

    @Patch(':id')
    patch(id: number, @Body() dto:  RateDTO): Promise<RateDTO> {
        throw new Error('Method not implemented.');
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<number> {
        return this.service.delete(id)
    }

}
