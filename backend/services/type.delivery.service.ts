/*
https://docs.nestjs.com/providers#services
*/

import { MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { Query } from 'entities/shared/interface';
import { Payload } from 'security/payload';
import { Service as _Service } from './supports/base.service';
import { EntityManager } from '@mikro-orm/mongodb';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';
import { TypeDelivery } from 'entities/type.delivery.entity';
import { ServiceType } from 'entities/shared/enum';
import { TypeDeliveryDTO } from './dtobjects/type.delivery.dto';
import { Order } from 'entities/order.entity';

@Injectable()
export class TypeDeliveryService extends _Service<TypeDelivery,TypeDeliveryDTO> implements OnModuleInit {

    logger = new Logger('AuthenticationService')

    constructor(
        @InjectRepository(TypeDelivery)
        protected readonly repository: MongoEntityRepository<TypeDelivery>,
        protected readonly em: EntityManager,
        protected eventEmitter: EventEmitter2,
        @Inject(CACHE_MANAGER)
        protected cache: Cache,
    ) {
        super(repository, em, eventEmitter, cache, null)
    }

    async onModuleInit() {
        const em = this.em.fork()

        

        const DSS = Builder(TypeDelivery)
            .id(ServiceType.DSS)
            .name('Giao hàng tiêu chuẩn')
            .description('Giao trong 8h')
            .fee(10000)
            .status(true)
            .createdAt(new Date())
            .updatedAt(new Date())
            .build()

        const DFS = Builder(TypeDelivery)
            .id(ServiceType.DFS)
            .name('Giao hàng nhanh')
            .description('Giao trong 4h')
            .fee(15000)
            .status(true)
            .createdAt(new Date())
            .updatedAt(new Date())
            .build()

            
        em.findOneOrFail(TypeDelivery, { id: ServiceType.DSS }).catch(() => em.persistAndFlush(DSS))
        em.findOneOrFail(TypeDelivery, { id: ServiceType.DFS }).catch(() => em.persistAndFlush(DFS))

    }

    async find(query: Query): Promise<TypeDeliveryDTO[]> {
        return await this.repository.find({});
    }

    async findOne(id: string, user?: Payload): Promise<TypeDeliveryDTO> {
        return await this.repository.findOneOrFail(id)
    }

    async caculateServiceFee(id: string, dto: any): Promise<number> {
        const service = await this.repository.findOneOrFail({id :id})
        if (service) {
            return +dto.volume * +dto.quantity * +service.fee
        }
        return 0
        
      }

    async create(dto: TypeDeliveryDTO): Promise<TypeDeliveryDTO> {
        const typeDelivery = this.repository.create(dto)
        await this.repository.persistAndFlush(typeDelivery)
        return this.mapper.toDTO(typeDelivery)
    }

    async update(id: string, dto: TypeDeliveryDTO): Promise<TypeDeliveryDTO> {
        const typeDelivery = await this.repository.findOneOrFail(id)
        return this.mapper.toDTO(typeDelivery)
    }

    patch(id: string | number, dto: any, user?: Payload): Promise<TypeDeliveryDTO> {
        throw new Error('Method not implemented.');
    }
    
    async delete(id: string): Promise<number> {
        return await this.repository.nativeDelete(id)
    }


}
