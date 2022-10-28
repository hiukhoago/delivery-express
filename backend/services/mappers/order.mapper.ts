import { Builder } from "builder-pattern";
import { Order } from "entities/order.entity";
import { OrderDTO } from "services/dtobjects/order.dto";
import { Mapper } from "./supports/base.mapper";


export class OrderMapper extends Mapper<Order, OrderDTO> {
    
        toDTO(source: Order): OrderDTO {
    
            return Builder(OrderDTO)
                .id(source.id)

                .information(source.information)

                .supplierId(source.supplierId)
                .supplierName(source.supplierName)
                
                .serviceId(source.serviceId)
                .serviceName(source.serviceName)
                .supplierNote(source.supplierNote)
                .supplierPhone(source.supplierPhone)


                .fee(source.fee)
                .total(source.total)

                .images(source.images)
                .promoCode(source.promoCode)
                .product(source.product)
                .status(source.status)
                .note(source.note)

                .approverId(source.approverId)
                .approverName(source.approverName)

                .user(source.user)

                .pickup_time(source.pickup_time)
                .create_time(source.create_time)
                .accept_time(source.accept_time)
                .complete_time(source.complete_time)

                .expected_delivery_date(source.expected_delivery_date)

                .isRated(source.isRated)

                .accept_lat(source.accept_lat)
                .accept_lng(source.accept_lng)
                .cancel_time(source.cancel_time)
                .cancel_comment(source.cancel_comment)
                .cancel_by_user(source.cancel_by_user)
                
                .createdAt(source.createdAt)
                .updatedAt(source.updatedAt)
                .build()
    
        }
    
        toEntity(source: Partial<OrderDTO>): Order {
    
            return Builder(Order)
                .id(source.id)

                .supplierId(source.supplierId)
                .supplierName(source.supplierName)
                .supplierNote(source.supplierNote)
                .supplierPhone(source.supplierPhone)


                .information(source.information)

                .serviceId(source.serviceId)
                .serviceName(source.serviceName)
                
                .user(source.user)

                .fee(source.fee)
                .total(source.total)

                .images(source.images)
                .promoCode(source.promoCode)
                .product(source.product)
                .status(source.status)
                .note(source.note)

                .approverId(source.approverId)
                .approverName(source.approverName)

                .pickup_time(source.pickup_time)
                .create_time(source.create_time)
                .accept_time(source.accept_time)
                .complete_time(source.complete_time)

                //ngay giao du kien
                .expected_delivery_date(source.expected_delivery_date)

                .accept_lat(source.accept_lat)
                .accept_lng(source.accept_lng)
                .cancel_time(source.cancel_time)
                .cancel_comment(source.cancel_comment)
                .cancel_by_user(source.cancel_by_user)
                
                .isRated(source.isRated)
            
                
                .createdAt(source.createdAt)
                .updatedAt(source.updatedAt)
                .build()
    
        }
    
}
