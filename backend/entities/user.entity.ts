import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Base, NumberBase } from "./supports/base.entity";
import { User as iUser, Wallet } from './shared/accounts.interface';
import { AuthorityRole } from "./shared/enum";

@Entity({ collection: 'user' })
export class User extends NumberBase implements iUser {

    @Property() name: string

    @Property() phone?: string

    @Property() address?: string

    @Property() avatar?: string
    
    @Property() email: string

    @Property() password: string
    
    @Property() authorities: AuthorityRole[]

    @Property() wallet? : Wallet

    @Property() avgRate? : number

    @Property({default:false}) isActive?: boolean

    @Property({default:false}) isAvaliable?: boolean

}
