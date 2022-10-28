/*
https://docs.nestjs.com/controllers#controllers
*/
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Query as IQuery } from 'entities/shared/interface';
import { Controller as _Controller } from './supports/base.controller'
import { Order } from 'entities/order.entity';
import { OrderService } from 'services/order.service';
import { OrderDTO } from 'services/dtobjects/order.dto';
import { AuthGuard, AuthUser } from 'security';
import { Payload } from 'security/payload';
import { UseGuards } from '@nestjs/common';
import { Source } from './supports/source.decorator';

@Controller(['order','orders'])

export class OrderController extends _Controller<Order,OrderDTO>  {
 
    constructor(readonly service: OrderService) { 
        super(service)
    }

    @Get()
    @UseGuards(AuthGuard)
    async find(@Query() query: IQuery, @AuthUser() user?: Payload,@Source() source? : string ): Promise<OrderDTO[]> {
        return await this.service.find(query,user,source)
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string, @AuthUser() user?: Payload, @Source() source?: string): Promise<OrderDTO> {
      return await this.service.findOne(id, user, source);
    }

    @Get('/count/all-status')
    @UseGuards(AuthGuard)
    async countOrderForDriver(@AuthUser() user?: Payload,@Source() source? : string): Promise<any> {
        return await this.service.getTotal(user,source)
    }
    @Get('/count/statistical')
    @UseGuards(AuthGuard)
    async getStatistical(@AuthUser() user?: Payload,@Source() source? : string): Promise<any> {
        return await this.service.getStatistical(user,source)
    }
    
    @Post()
    @UseGuards(AuthGuard)
    create(@Body() dto: OrderDTO, @AuthUser() user?: Payload,@Source() source? : string ): Promise<OrderDTO> {
        return  this.service.create(dto,user,source)
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateOrder(@Param('id') id: number, @AuthUser() user: Payload, @Body() dto: OrderDTO,@Source() source? : string): Promise<OrderDTO> {
        return  this.service.updateOrder(id,user,dto,source)
    }

    @Put('/accept/all')
    @UseGuards(AuthGuard)
    acceptAll(@AuthUser() user: Payload,@Source() source? : string): Promise<OrderDTO> {
        return this.service.acceptAll(user,source)
    }

    update(id: string | number, dto: OrderDTO): Promise<OrderDTO> {
        throw new Error('Method not implemented.');
    }

    @Patch(':id/approve')
    @UseGuards(AuthGuard)
    async patch(@Param('id') id: number, dto: OrderDTO, @AuthUser() user?: Payload,@Source() source? : string): Promise<any> {
        return await this.service.patch(id, dto,user,source)
    }

    @Delete(':id')
    delete(id: number): Promise<number> {
        return this.service.delete(id)
    }
   
}
