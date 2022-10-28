import { ServiceType } from "entities/shared/enum";
import { TypeDelivery } from "entities/type.delivery.entity";

//export dua tren ilement entity
export class TypeDeliveryDTO  implements TypeDelivery {
    id: ServiceType;
    name: string;
    description: string;
    fee: number;
    icon?: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;

}