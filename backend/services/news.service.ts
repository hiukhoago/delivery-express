import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, HttpException, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { News } from 'entities/news.entity';
import { Query } from 'entities/shared/interface';
import { Payload } from 'security/payload';
import { NewsDTO } from './dtobjects/news.dto';
import { NewsMapper } from './mappers/news.mapper';
import { Service as _Service } from './supports/base.service';
import { Builder } from 'builder-pattern';
import { wrap } from '@mikro-orm/core';


//_Service<entitiy,dto>

@Injectable()
export class NewsService extends _Service<News,NewsDTO> implements OnModuleInit {

    
    logger = new Logger('NewsService')

    constructor(
        @InjectRepository(News)// lấy data từ bảng News
        protected readonly repository: MongoEntityRepository<News>,
        protected readonly em: EntityManager,
        protected eventEmitter: EventEmitter2,
        @Inject(CACHE_MANAGER)
        protected cache: Cache,
        protected readonly mapper: NewsMapper,
    ) {
        super(repository, em, eventEmitter, cache, mapper)
    }

    onModuleInit() {}
    
    async find(query: Query): Promise<NewsDTO[]> {
        console.log('query------->>>',query)
        const { filters } = query
        let where = {}
        if (filters) {
            if (filters.title) { where['title'] = {$in: [filters?.title]} }
        }else {
            where = {}
          }
        const listNews = await this.repository.find(where);
        return listNews.map(this.mapper.toDTO);
    }

    async findOne(id: number): Promise<NewsDTO> {
        return await this.repository.findOneOrFail({ id: +id })
    }

    async searchByTitle(title:string):Promise<any>{
        return await this.repository.findOne({title:title});
    }

    async create(dto: NewsDTO): Promise<NewsDTO> {
            const news = this.repository.create(dto)
            wrap(news).assign(dto)
            this.mapper.toEntity(news)
            await this.repository.persistAndFlush(news)
            return this.mapper.toDTO(news)
    }

    async update(id: string, dto: NewsDTO): Promise<NewsDTO> {
        const news = await this.repository.findOneOrFail({id: +id})
        return this.mapper.toDTO(news)
    }
    // async update(id: string, newTitle:string, newContent:string, newImages?:string): Promise<NewsDTO> {
    //     const exitingNews = await this.repository.findOneOrFail(id);
    //     exitingNews.title = newTitle ?? exitingNews.title;
    //     exitingNews.content = newContent ?? exitingNews.content;
    //     exitingNews.images = newImages ?? exitingNews.images;
    //     this.mapper.toEntity(exitingNews)
    //     wrap(exitingNews).assign(dto)
    //     await this.repository.persistAndFlush(exitingNews)
    //     return this.mapper.toDTO(exitingNews)
    // }

    async patch(id: number, dto: NewsDTO): Promise<NewsDTO> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<any>{
        const count = await this.repository.nativeDelete(+id)
        await this.em.flush()
        return count
    }

}
