import { CACHE_MANAGER, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';

import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { compare, hashSync } from 'bcrypt';
import { Builder } from 'builder-pattern';
import { Query } from 'entities/shared/interface';
import { User } from 'entities/user.entity';
import { Payload } from 'security/payload';
import { AuthDTO } from './dtobjects/auth.dto';
import { UserDTO } from './dtobjects/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { Service as _Service } from './supports/base.service';
import { UsersService } from './users.service';
import { wrap } from '@mikro-orm/core';
import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
import { AuthorityRole } from 'entities/shared/enum';
import { Observable, Subject } from 'rxjs'
import { Rate } from 'entities/rate.entity';
import { RateDTO } from './dtobjects/rate.dto';
import { RateMapper } from './mappers/rate.mapper';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Order } from 'entities/order.entity';

@Injectable()
export class RateService extends _Service<Rate, RateDTO> implements OnModuleInit {
  delete(id: string | number, user?: Payload): Promise<number> {
    throw new Error('Method not implemented.');
  }
  logger = new Logger('RateService')

  constructor(
    @InjectRepository(Rate)
    protected readonly repository: MongoEntityRepository<Rate>,
    protected readonly em: EntityManager,
    protected eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER)
    protected cache: Cache,
    protected readonly mapper: RateMapper,
  ) {
    super(repository, em, eventEmitter, cache, mapper)
  }
  onModuleInit() {
    const em = this.em.fork(); // create a forked entity manager

    const rate = Builder(Rate)
      .userId(19149871)
      .emailUser('man@gmail.com')
      .commentUser('shipper toi nnhan hang lau')
      .rating(4)
      .createdAt(new Date())
      .updatedAt(new Date())
      .build();

    // em.findOneOrFail(Rate, { id: 19149855 }).catch(() => em.persistAndFlush(rate))

  }

  async find(query: Query,user?: Payload, source?: string): Promise<RateDTO[]> {
    const { filters } = query
    let where = {}
    if (source?.startsWith('/admin/rate')) {
      where['emailUser'] = user?.email
      if(filters){
        if (filters.rating) {where['rating'] = filters?.rating}
        if (filters.rating) {where['rating'] = filters?.rating}
      }else{
        where = {}
      }
      const rate = await this.repository.find(where)
      return rate.map(this.mapper.toDTO)
    }

    if (source?.startsWith('/manage/rates')) {
      if(filters){
        if (filters.rating) {where['rating'] = filters?.rating}
        if (filters.rating) {where['rating'] = filters?.rating}
      }else{
        where = {}
      }
      const rate = await this.repository.find(where)
      return rate.map(this.mapper.toDTO)
    }


    const rate = await this.repository.find({})
    return rate.map(this.mapper.toDTO)
  }

  async findOne(id: any): Promise<RateDTO> {
    return await this.repository.findOneOrFail({ id: +id })
  }

  async create(dto: RateDTO, user: Payload): Promise<RateDTO> {
    const rate = this.repository.create(dto)
    rate.userId = user.id
    rate.emailUser = user.email
    const order = await this.em.findOneOrFail(Order,{id:+dto.orderId})
    //const driver = await this.em.findOneOrFail(User,{id:order.supplierId})
    if (order) {
      order.isRated = true
      // if(driver){
      //   driver.avgRate += (driver.avgRate + dto.rating)/2
      // }
    }
    await this.repository.persistAndFlush(rate)
    await this.repository.persistAndFlush(order)
    //await this.em.flush(order)
    return this.mapper.toDTO(rate)
  }

  async update(id: number, dto: RateDTO): Promise<RateDTO> {
    const order = await this.repository.findOneOrFail(id)
    return this.mapper.toDTO(order)

  }

  patch(id: string | number, dto: RateDTO): Promise<RateDTO> {
    throw new Error('Method not implemented.');
  }

}


