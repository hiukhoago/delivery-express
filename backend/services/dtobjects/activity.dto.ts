import { User } from "entities/shared/accounts.interface";
import { ActivityState, ActivityType } from "entities/shared/actitivty.interface";


export class ActivityDTO {
  id: number;
  activityType: string;
  userId: string;
  user: Partial<User>;
  amount: number;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}