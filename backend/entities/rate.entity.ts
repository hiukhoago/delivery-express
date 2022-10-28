
import { Entity, Property } from '@mikro-orm/core';
import { NumberBase } from './supports/base.entity';
import { Rate as iRate } from './shared/rate.interface';



//number base la generate id 
@Entity()
export class Rate extends NumberBase implements iRate  {

    @Property() userId: number;

    @Property() orderId: number;

    @Property() emailUser : string;

    @Property() commentUser?: string;
    
    @Property() rating: number;

  
}