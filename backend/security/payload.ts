import { User } from "entities/shared/accounts.interface";

export type Payload = Pick<User, "id" | "name" | "email" | "phone" | "avatar" | "authorities"|"wallet">
