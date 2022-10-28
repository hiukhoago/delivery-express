import { NewsService } from './../services/news.service';
import { NewsController } from './../controllers/news.controller';
/*
https://docs.nestjs.com/modules
*/

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { News } from 'entities/news.entity';
import { NewsMapper } from 'services/mappers/news.mapper';

@Module({
    imports: [MikroOrmModule.forFeature([News])],
    controllers: [NewsController],
    providers: [NewsService,NewsMapper],
})
export class NewsModule { }
