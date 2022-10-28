export interface Province {
    code: number
    codename: string
    districts: []
    division_type: string
    name: string
    phone_code: number
}

export interface District {
    name:string
    code:number,
    division_type:string
    codename:string
    province_code:number
    wards:[]
}

export interface Ward {
    name:string,
    code:number,
    division_type:string,
    codename:string,
    district_code:number
}
