import { Entity, Property } from "@mikro-orm/core";
import { User, Wallet } from "./shared/accounts.interface";
import { NumberBase } from "./supports/base.entity";


@Entity({ collection: 'activity' })
export class Activity extends NumberBase {
    @Property() activityType: string;
    @Property() userId: string;
    @Property() user: Partial<User>;
    @Property() amount: number;
    @Property() state: string;
}