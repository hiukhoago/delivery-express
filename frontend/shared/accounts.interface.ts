import { AuthorityRole } from "./enum"



export interface Authentication {
  email: string
  password: string
  authorities: AuthorityRole[]
  isActive?: boolean
}


export interface Information {

  id:number

  name: string

  phone?: string

  address? : string

  avatar? : string

  isAvaliable?: boolean

  wallet?: Wallet

  avgRate?: number

}

export interface User extends Information , Authentication {

  createdAt: Date;

  updatedAt: Date;
}

export interface Wallet {
  balance: number,
  depositCount: number,
  withdrawCount: number
  depositAmount: number,
  withdrawAmount: number
}
