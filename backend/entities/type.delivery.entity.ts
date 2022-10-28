import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ServiceType } from './shared/enum';
import { TypeDelivery as iTypeDelivery } from './shared/type.delivery.interface';

@Entity()
export class TypeDelivery  implements iTypeDelivery {
    
    @PrimaryKey({fieldName:'_id'}) id: ServiceType;
    
    @Property() name: string;
    
    @Property() description: string;

    @Property() fee: number;

    @Property() status: boolean;

    @Property() createdAt: Date;

    @Property() updatedAt: Date;
    
}