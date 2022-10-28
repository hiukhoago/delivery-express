
export interface Rate {
    //--------# Rating----------
    id:number
    userId : number // nguoi ratting
    orderId : number // nguoi ratting
    emailUser : string // email nguoi ratting
    commentUser? : string
    rating: number, //so sao
    commentReceiver?: string,
}
   