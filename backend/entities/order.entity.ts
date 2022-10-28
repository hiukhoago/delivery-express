import {NumberBase } from "./supports/base.entity";
import { Order as iOrder, Information, NoteOrder, Product } from './shared/order.interface';
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { OrderStatus, ServiceType } from "./shared/enum";
import { User } from "./shared/accounts.interface";

@Entity()
export class Order extends NumberBase implements iOrder {
    
    @Property() fee: number
    
    @Property() total: number

    @Property() information: Information[]
    
    //service
    @Property() serviceId: ServiceType
    @Property() serviceName: string
    
    //supplier
    @Property() supplierId: number
    @Property() supplierName: string
    @Property() supplierNote?: string
    @Property() supplierPhone?: string
   
    //admin
    @Property() approverId: number
    @Property() approverName: string

    @Property() user: Partial<User>
    
    @Property() promoCode?: string
    
    @Property() images?: string[]

    @Property() product: Product

    @Property() status: OrderStatus

    @Property() note: NoteOrder

    @Property() pickup_time?: Date
    @Property() create_time?: Date
    @Property() complete_time?: Date

    @Property() expected_delivery_date?: Date

    @Property() isRated? : boolean

    @Property() accept_time?: Date
    @Property() accept_lat?: string
    @Property() accept_lng?: string
    @Property() cancel_time?: Date
    @Property() cancel_comment?: string
    @Property() cancel_by_user?: boolean
    

    


    
}