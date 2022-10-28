import { QueryOrder } from '@mikro-orm/core';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';
import { Activity } from 'entities/activity.entity';
import { ActivityState } from 'entities/shared/actitivty.interface';
import { Query } from 'entities/shared/interface';
import { User } from 'entities/user.entity';
import { DateTime } from 'luxon';
import { Payload } from 'security/payload';
import { ActivityDTO } from './dtobjects/activity.dto';
import { ActivityMapper } from './mappers/activity.mapper';
import { Service as _Service } from './supports/base.service';


@Injectable()
export class ActivityService extends _Service<Activity, ActivityDTO> implements OnModuleInit {
    logger = new Logger('ActivityService')

    constructor(
        @InjectRepository(Activity)
        protected readonly repository: MongoEntityRepository<Activity>,
        protected readonly em: EntityManager,
        protected eventEmitter: EventEmitter2,
        @Inject(CACHE_MANAGER)
        protected cache: Cache,
        protected readonly mapper: ActivityMapper,

    ) {
        super(repository, em, eventEmitter, cache, mapper)
    }
    onModuleInit() { }

    async find(query: Query, user?: Payload, source?: string): Promise<ActivityDTO[]> {
        const { filters, pageable } = query
        let where = {}
        if (source?.startsWith('/manage/activities')) {
            if (filters) {
                if (filters.state) { where['state'] = filters?.state }
                if (filters.activityType) { where['activityType'] = filters?.activityType }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
            } else {
                where = {}
            }
        }
        if (source?.startsWith('/admin/activities')) {
            if (filters) {
                if (filters.state) { where['state'] = filters?.state }
                if (filters.activityType) { where['activityType'] = filters?.activityType }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
            } else {
                where = {}
            }
        }
        const activities = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { createdAt: QueryOrder.DESC } })
        return activities.map(this.mapper.toDTO)
    }

    findOne(id: string | number, user?: Payload): Promise<ActivityDTO> {
        throw new Error('Method not implemented.');
    }
    async create(dto: ActivityDTO, user?: Payload, source?: string): Promise<ActivityDTO> {
        const activity = this.repository.create(dto)

        console.log('user--------->>>',user)

        if (source?.startsWith('/admin/account')) {
            activity.user = user
            activity.userId = user.id.toString()
            activity.activityType = dto.activityType
            activity.amount = dto.amount
            activity.state = ActivityState.REQUEST
            activity.user.wallet = user.wallet
            
            console.log('activity', activity)
            this.em.persistAndFlush(activity)
            return this.mapper.toDTO(activity)
        }else{

            //driver
            activity.user = user
            activity.userId = user.id.toString()
            activity.activityType = dto.activityType
            activity.amount = dto.amount
            activity.state = ActivityState.REQUEST
            activity.user.wallet = user.wallet

            console.log('activity', activity)
            this.em.persistAndFlush(activity)
            return this.mapper.toDTO(activity)
        }

        

    }
    update(id: string | number, dto: ActivityDTO, user?: Payload): Promise<ActivityDTO> {
        throw new Error('Method not implemented.');
    }

    async patch(id: string, dto: ActivityDTO, payload?: Payload, source?: string): Promise<ActivityDTO> {
        if (source?.startsWith('/manage/activities')) {
            const activity = await this.em.findOneOrFail(Activity, { id: +id })
            const _user = await this.em.findOneOrFail(User, { id: +dto?.userId })
            if (activity) {
                if (dto.state === ActivityState.COMPLETE) {
                    activity.state = dto.state
                    _user.wallet.balance += dto.amount
                    activity.user = _user

                    this.em.persist(activity)
                }else if (dto.state === ActivityState.CANCEL) {
                    activity.state = dto.state
                    activity.user = _user

                    this.em.persist(activity)
                }else if (dto.state === ActivityState.RETURN) {
                    activity.state = dto.state
                    _user.wallet.balance -= dto.amount
                    activity.user = _user

                    this.em.persist(activity)
                }
                this.em.flush()
            }

            return this.mapper.toDTO(activity)
        }
    }
    delete(id: string | number, user?: Payload): Promise<number> {
        throw new Error('Method not implemented.');
    }


}