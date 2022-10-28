/*
https://docs.nestjs.com/controllers#controllers
*/
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Query as iQuery } from 'entities/shared/interface';
import { Controller as _Controller } from './supports/base.controller'
import { TypeDelivery } from 'entities/type.delivery.entity';
import { TypeDeliveryService } from 'services/type.delivery.service';
import { TypeDeliveryDTO } from 'services/dtobjects/type.delivery.dto';

@Controller(['service','services'])
export class TypeDeliveryController extends _Controller<TypeDelivery,TypeDeliveryDTO>  {

    constructor(readonly service: TypeDeliveryService) { 
        super(service)
    }
    @Get()
    async find(@Query() query: iQuery): Promise<TypeDeliveryDTO[]> {
        return await this.service.find(query)
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<TypeDeliveryDTO> {
        return this.service.findOne(id)
    }

    @Post()
    async create(@Body() dto: TypeDeliveryDTO): Promise<TypeDeliveryDTO> {
        return await this.service.create(dto)
    }

    @Put(':id')
    async update(@Param('id') id: string,  @Body() dto: TypeDeliveryDTO): Promise<TypeDeliveryDTO> {
        return await this.service.update(id, dto)
    }

    patch(id: string | number, dto: any): Promise<any> {
        throw new Error('Method not implemented.');
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<number> {
        return await this.service.delete(id)
    }

    @Post('/calculate-fee/:id')
    async calculateServiceFee(@Param('id') id: string, @Body() dto: any): Promise<number> {
        return await this.service.caculateServiceFee(id, dto)
    }
    
}
