/*
https://docs.nestjs.com/providers#services
*/

import { MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { Order } from 'entities/order.entity';
import { AuthorityRole, OrderStatus, ServiceType } from 'entities/shared/enum';
import { Query } from 'entities/shared/interface';
import { Payload } from 'security/payload';
import { Service as _Service } from './supports/base.service';
import { EntityManager } from '@mikro-orm/mongodb';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';
import { OrderDTO } from './dtobjects/order.dto';
import { OrderMapper } from './mappers/order.mapper';
import { QueryOrder, wrap } from '@mikro-orm/core';
import { MailService } from 'mail/mail.service';
import { User } from 'entities/user.entity';
import { TypeDelivery } from 'entities/type.delivery.entity';
import { DateTime } from 'luxon';
import { hasUserRole } from 'support/utility';


@Injectable()
export class OrderService extends _Service<Order, OrderDTO> implements OnModuleInit {


    logger = new Logger('AuthenticationService')

    constructor(
        @InjectRepository(Order)
        protected readonly repository: MongoEntityRepository<Order>,
        protected readonly em: EntityManager,
        protected eventEmitter: EventEmitter2,
        @Inject(CACHE_MANAGER)
        protected cache: Cache,
        protected mapper: OrderMapper,
        private mailService: MailService,

    ) {
        super(repository, em, eventEmitter, cache, null)
    }

    onModuleInit() { }

    async find(query: Query, user?: Payload, source?: string): Promise<OrderDTO[]> {
        const { filters, pageable } = query
        let where = {}
        if (source?.startsWith('/manage/orders')) {
            if (filters) {
                if (filters.name) { where['information.name'] = { $in: [filters?.name] } }
                if (filters.status) { where['status'] = filters?.status }
                if (filters.email) { where['user.email'] = filters?.email }

                if (filters.serviceId) { where['serviceId'] = filters?.serviceId }
                if (filters.serviceId) { where['serviceId'] = filters?.serviceId }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
            } else {
                where = {}
            }
            const orders = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { createdAt: QueryOrder.DESC } })
            return orders.map(this.mapper.toDTO)
        }

        if (source?.startsWith('/manage/COD')) {
            where['status'] = 'completed'
            if (filters) {
                if (filters.status) { where['status'] = filters?.status }
                // if (filters.email) { where['user.email'] = filters?.email }
                if (filters.serviceId) { where['serviceId'] = filters?.serviceId }
                if (filters?.cod) { where['note.cod'] = filters?.cod }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
            } else {
                where = {}
            }
            const orders = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { createdAt: QueryOrder.DESC } })
            return orders.map(this.mapper.toDTO)
        }

        if (source?.startsWith('/admin/orders')) {
            where['user.email'] = user?.email
            if (filters) {
                if (filters.status) { where['status'] = filters?.status }
                if (filters.name) { where['information.name'] = { $in: [filters?.name] } }

                if (filters.serviceId) { where['serviceId'] = filters?.serviceId }
                if (filters.serviceId) { where['serviceId'] = filters?.serviceId }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }

            } else {
                where = {}
            }
            const orders = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { createdAt: QueryOrder.DESC } })
            return orders.map(this.mapper.toDTO)
        }
        if (source?.startsWith('/admin/rate')) {
            where['user.email'] = user?.email
            if (filters) {
                if (filters.status) { where['status'] = filters?.status }

                if (filters.from && filters.to) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day'), $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }
                else if (filters.from) where['createdAt'] = { $gte: DateTime.fromFormat(filters.from, 'yyyy-MM-dd').startOf('day') }
                else if (filters.to) where['createdAt'] = { $lte: DateTime.fromFormat(filters.to, 'yyyy-MM-dd').endOf('day') }

            } else {
                where = {}
            }
            const orders = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { createdAt: QueryOrder.DESC } })
            return orders.map(this.mapper.toDTO)
        }

        //Find by driver
        if (filters) {
            if (filters.status) { where['status'] = filters?.status }
            if (filters.status !== OrderStatus.ASSIGNING) { where['supplierId'] = user?.id }
        } else {
            where = {}
        }

        console.log('where', where)
        const orders = await this.repository.find(where, { offset: pageable?.page * pageable?.size, orderBy: { expected_delivery_date: QueryOrder.DESC } })
        return orders.map(this.mapper.toDTO)
    }

    async getTotal(user: Payload, source: string): Promise<object> {
        console.log('user', user)
        const total1 = await this.repository.aggregate([
            {
                $match: { status: OrderStatus.ASSIGNING }
            },
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ])
        const total2 = await this.repository.aggregate([
            {
                $match: { status: { $ne: [OrderStatus.ASSIGNING] }, supplierId: user.id }
            },
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ])
        const _user = await this.repository.aggregate([
            {
                $group: {
                    _id: "$isActive",
                    total: { $sum: 1 }
                }
            }
        ])

        const result = {
            total1,
            total2,
            _user
        }

        return result
    }
    async getStatistical(user?: Payload, source?: string): Promise<object> {
        const statistical = await this.repository.aggregate([
            {
                "$facet": {
                    "totalStatus": [
                        {
                            $match: { createdAt: { $gte: DateTime.now().startOf('day'), $lte: DateTime.now().endOf('day') } }
                        },
                        {
                            $group: {
                                _id: "$status",
                                count: { $sum: 1 }
                            }
                        }
                    ],
                    "totalOrder": [
                        {
                            $match: {
                                status: { $nin: [OrderStatus.COMPLETED, OrderStatus.CANCELLED] },
                                createdAt: { $gte: DateTime.now().startOf('day'), $lte: DateTime.now().endOf('day') }

                            }
                        },
                        {
                            $group: {
                                _id: 0,
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $project: {
                                _id: 1,
                                title: "Tổng số đơn hàng",
                                count: "$count",
                            }
                        }
                    ],
                    "totalIncome": [
                        {
                            $match: {
                                status: OrderStatus.COMPLETED,
                                createdAt: { $gte: DateTime.now().startOf('day'), $lte: DateTime.now().endOf('day') }
                            }
                        },
                        {
                            $group: {
                                _id: 0,
                                count: { $sum: "$total" },
                                qty: { $sum: 1 }
                            }
                        },
                        {
                            $project: {
                                _id: 1,
                                title: "Tổng doanh thu",
                                count: "$count",
                                qty: "$qty"
                            }
                        }

                    ],
                }
            }
        ])
        const _user = await this.em.aggregate(User, [
            {
                $match: { isActive: true, authorities: { $in: [AuthorityRole.User, AuthorityRole.Driver] } }
            },
            {
                $group: {
                    _id: 1,
                    count: { "$sum": 1 },
                }
            },
            {
                $project: {
                    _id: 0,
                    count: "$count",
                }
            },

        ])
        return { statistical, _user }

    }


    async findOne(id: string, user?: Payload, source?: string): Promise<OrderDTO> {
        const order = await this.repository.findOne({ id: +id })
        return this.mapper.toDTO(order)
    }

    async create(dto: OrderDTO, user: Payload, source?: string): Promise<OrderDTO> {
        if (source?.startsWith('/admin/orders/create')) {
            const order = this.repository.create(dto)
            const service = await this.em.findOneOrFail(TypeDelivery, { id: dto.serviceId })
            if (hasUserRole(user?.authorities)) {
                order.user = user
                order.serviceName = service?.name
                if (dto?.serviceId === ServiceType.DSS) {
                    order.expected_delivery_date = DateTime.now().plus({ days: 5 }).toJSDate()
                } else {
                    order.expected_delivery_date = DateTime.now().plus({ days: 2 }).toJSDate()
                }
                await this.repository.persistAndFlush(order)
                return this.mapper.toDTO(order)
            } else {
                return
            }
        } else {
            throw new Error('Not allowed')
        }
    }

    async acceptAll(user: Payload, source?: string): Promise<any> {
        // Admin update all status order frorm idle to assigned
        if (source?.startsWith('/manage/orders')) {
            const order = await this.repository.find({ status: OrderStatus.IDLE })
            order.map(o => {
                o.status = OrderStatus.ASSIGNING
                o.approverId = user.id
                o.approverName = user.name
                if (o.status === OrderStatus.ASSIGNING) {
                    this.mailService.sendConfirmOrder(o?.user as User, o);
                }
            })
            await this.repository.persistAndFlush(order)


        } else {
            throw new Error('Not allowed')
        }
    }

    async updateOrder(id: number, user: Payload, dto: OrderDTO, source?: string): Promise<OrderDTO> {
        //Admin update status from Idle to Assigning
        if (source?.startsWith('/manage/orders')) {
            console.log('updateOrder------->>>')
            const order = await this.repository.findOneOrFail(+id)
            const _user = await this.em.findOneOrFail(User, { id: order?.user.id })
            if (order) {
                order.status = dto.status
                order.approverId = user.id
                order.approverName = user.name
                await this.repository.persistAndFlush(order)
                if (dto.status === OrderStatus.ASSIGNING) {
                    this.mailService.sendConfirmOrder(order?.user as User, order);
                    if (_user) {
                        if (order?.note.payShippingFee === 0) {
                            // payShippingFee: 0 | 1, // 0: nguoi gui tra~, 1: nguoi nhan tra~
                            _user.wallet.balance -= order?.total
                        }
                    }
                    else {
                        throw new Error('User not found')
                    }
                }

                await this.em.flush()
                return this.mapper.toDTO(order)
            }
        }

        //update driver
        console.log('updateOrder Driver------->>>')
        const order = await this.repository.findOneOrFail(+id)
        console.log('order dto----->>>>', dto)
        if (order) {
            order.supplierId = user.id
            order.supplierName = user.name
            order.supplierPhone = user.phone
            dto?.supplierNote ? order.supplierNote = dto.supplierNote : null
            const driver = await this.em.findOneOrFail(User, { id: order.supplierId })
            //pick up and check cod value 
            if (order.status === OrderStatus.ASSIGNING) {
                if(dto.status === OrderStatus.ACCEPTED){
                    order.pickup_time = DateTime.now().toJSDate()
                }

                //Có thu hộ
                if (order?.note?.cod == 0) {
                    if (order?.note?.payShippingFee == 0) {
                        //người gửi trả phí shiping
                        driver.wallet.balance -= (order?.note?.codValue - order?.total)
                    } else if (order?.note?.payShippingFee == 1) {
                        //người nhận trả phí shiping
                        driver.wallet.balance -= order?.note?.codValue
                    }
                } else {
                    //Không thu hộ
                    if (order?.note?.payShippingFee == 0) {
                        //người gửi trả phí shiping
                        driver.wallet.balance += order?.total
                    }
                }
            }
            if (dto.status === OrderStatus.COMPLETED) {
                // driver.wallet.balance += +order.total * 0.75
                order.complete_time = DateTime.now().toJSDate()
            }
            order.status = dto.status
         

            console.log('order----------------------------------------->>>>', order)
            console.log('driver----------------------------------------->>>>', driver)

            await this.em.flush()
            return this.mapper.toDTO(order)
        }

    }

    async update(id: string | number, dto: OrderDTO, user?: Payload): Promise<OrderDTO> {
        throw new Error('Method not implemented.');
    }

    //apporve Cod
    async patch(id: number, dto: OrderDTO, user?: Payload, source?: string): Promise<any> {

        if (source?.startsWith('/manage/COD')) {
            const orders = await this.repository.find({ supplierId: id })
            const _user = await this.em.findOneOrFail(User, { id: user?.id })
            orders.map(o => {
                _user.wallet.balance += o.total
            })
            await this.em.flush()
            return orders.map(o => this.mapper.toDTO(o))
        }
    }

    async delete(id: number): Promise<number> {
        return await this.repository.nativeDelete(id)
    }

}
