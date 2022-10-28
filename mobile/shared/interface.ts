export interface Cookie {
    name: string;
    value: string;
    path?: string;
    domain?: string;
    version?: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }
  
  export interface Cookies {
    [key: string]: Cookie;
  }

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


