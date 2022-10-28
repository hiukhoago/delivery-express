import { User, Wallet } from "./accounts.interface";

export enum ActivityType {
  DEPOSIT = 'd',
  WITHDRAW = 'w',
}

export enum ActivityState {
  REQUEST = 'request', USER_CANCEL = 'user_cancel', CANCEL = 'cancel', COMPLETE = 'complete', RETURN = 'return'
}

export interface Activity {
    id: number;
    activityType: ActivityType
  
    userId: string;
    user: Partial<User>;

    amount: number;

    state: ActivityState;

    createdAt: Date;
    updatedAt: Date;

}
