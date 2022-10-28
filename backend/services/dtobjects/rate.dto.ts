import { Rate } from "entities/rate.entity";
//export dua tren ilement entity
export class RateDTO  implements Rate {
    id: number;
    emailUser: string;
    userId: number;
    orderId: number;
    commentUser?: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}