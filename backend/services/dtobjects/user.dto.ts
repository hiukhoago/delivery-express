import { User, Wallet } from "entities/shared/accounts.interface"
import { AuthorityRole } from "entities/shared/enum"


export class UserDTO implements User {
    id: number;
    email: string
    password: string
    name: string
    phone?: string
    address?: string
    avatar?:string
    authorities: AuthorityRole[]
    isActive?: boolean; //driver active
    isAvaliable?: boolean; //driver avaliable
    wallet?:Wallet;
    avgRate?:number

    createdAt: Date
    updatedAt: Date
}


