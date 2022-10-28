import { ServiceType } from "./enum";


export interface TypeDelivery {
    id: ServiceType;
    name: string;
    description: string;
    fee: number; // price
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}