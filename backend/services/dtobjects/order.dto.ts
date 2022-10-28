
import { Order } from 'entities/order.entity';
import { User } from 'entities/shared/accounts.interface';
import { OrderStatus, ServiceType } from 'entities/shared/enum';
import { Information, NoteOrder, Product } from 'entities/shared/order.interface';

export class OrderDTO implements Order {

    supplierId: number;
    supplierName: string;
    
    fee: number;
    total: number;
    
    user: Partial<User>;
    id: number;

    serviceId: ServiceType;
    serviceName: string;
    supplierNote?:string
    supplierPhone?:string

    promoCode?: string;
    approverId: number;
    approverName: string;
    information: Information[];
    images?: string[];
    product: Product;
    status: OrderStatus;
    note: NoteOrder;

    pickup_time? : Date //Pick-up time
    create_time? : Date // Order create time
    accept_time? : Date//# Order accept time
    complete_time?: Date

    accept_lat?: string
    accept_lng?: string

    cancel_time? : Date // Order cancel time
    cancel_comment? : string       //"Lich chuyen nha bi hoan", // Cancelled reason by user or supplier
    cancel_by_user? : boolean // True if this order is cancelled by user, otherwise False

    expected_delivery_date?: Date

    isRated? :boolean
    

    createdAt: Date;
    updatedAt: Date;
}
