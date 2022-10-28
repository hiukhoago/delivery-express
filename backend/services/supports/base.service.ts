import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb'
import { Logger } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { Builder } from 'builder-pattern'
import { Cache } from 'cache-manager'
import { Query } from 'entities/shared/interface'
import { Payload } from 'security/payload'
import { Mapper } from 'services/mappers/supports/base.mapper'
export abstract class Service<E, D>{

    protected readonly logger = new Logger(Service.name)

    constructor(
        protected readonly repository: MongoEntityRepository<E>,
        protected readonly em: EntityManager,
        protected readonly eventEmitter: EventEmitter2,
        protected readonly cache: Cache,
        protected readonly mapper: Mapper<E, D>,
    ) { }

    stricter<T>(e: T, s?: string[]): Partial<T> {
        if (s) return Object.fromEntries(Object.entries(e).filter(([k, v]) => s.includes(k))) as T
        return Object.fromEntries(Object.entries(e).filter(([_, v]) => v != null)) as T
    }

    abstract find(query: Query, user?: Payload): Promise<D[]>

    abstract findOne(id: string | number, user?: Payload): Promise<D>

    abstract create(dto: D, user?: Payload): Promise<D>

    abstract update(id: string | number, dto: D, user?: Payload): Promise<D>

    abstract patch(id: string | number, dto: D, user?: Payload): Promise<D>

    abstract delete(id: string | number, user?: Payload): Promise<number>

}
