import { User } from "../shared/accounts.interface";
import { AuthorityRole } from "../shared/enum";

export interface Authentication {

    authenticated: boolean

    principal?: Partial<User>;

    jwt?: string;

    roles?: AuthorityRole[];

}

export interface Toast {
    id: number,
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string,
    dismiss: boolean,
    duration: number,
    closing: boolean,
}

export interface Alert {
    id: number;
    title: string;
    message: string;
    type: 'info' | 'danger' | 'success' | 'warning' | 'neutral';
    more: () => void;
}