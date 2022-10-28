
export interface Sort {
    field: string;
    order: 'a' | 'd';
}

export interface Pageable {
    size: number;
    page: number;
    maxPage: number;
    sort?: Sort[];
}

export interface Query {

    pageable?: Pageable;
    filters?: any;
    search?: string;
    category?: string;
}

export interface Modal {
    open: boolean
    type: string
    title: string
    data: any
}

