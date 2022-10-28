/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Put, Delete, Param, Query, Post, Body, Req, ClassSerializerInterceptor, UseInterceptors, Patch } from '@nestjs/common';
import { News } from 'entities/news.entity';
import { Query as iQuery } from 'entities/shared/interface';
import { get } from 'http';
import { NewsDTO } from 'services/dtobjects/news.dto';
import { NewsService } from 'services/news.service';
import { Controller as _Controller } from './supports/base.controller'

@Controller(['news'])
export class NewsController extends _Controller<News, NewsDTO> {

    constructor(readonly service: NewsService) {
        super(service)
    }

    @Get()
    async find(@Query() query: iQuery): Promise<NewsDTO[]> {
        return await this.service.find(query)
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<NewsDTO> {
        return await this.service.findOne(+id);
    }

    @Get('/searchTitle/:title')
    async searchByTitle(@Param('title') title: string) {
        return await this.service.searchByTitle(title);
    }

    @Post()
    async create(@Body() createNewsDto: NewsDTO): Promise<NewsDTO> {
        return await this.service.create(createNewsDto)
    }

    @Patch(':id')
    async update(@Param('id') id: string ,@Body() dto: NewsDTO): Promise<NewsDTO> {
        return await this.service.update(id,dto)
    }
    
    patch(id: string | number, dto: NewsDTO): Promise<NewsDTO> {
        throw new Error('Method not implemented.');
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<number>  {
        return await this.service.delete(id)
    }

}
