import { OrderStatus, ServiceType } from "./enum";
import { User } from './accounts.interface';

export interface Order{
    id?: number;
    information : Information[]

    serviceId: ServiceType
    serviceName?: string

    supplierId?: number
    supplierName?: string
    supplierPhone?: string
    supplierNote?: string

    approverId?:number
    approverName?:string

    user: Partial<User>

    images?: Array<string>
    promoCode?: string
    product : Product
    status:	OrderStatus
    note:NoteOrder

    pickup_time? : Date //Pick-up time
    create_time? : Date, // Order create time  
    accept_time? : Date,//# Order accept time
    complete_time?: Date,

    accept_lat?: string
    accept_lng?: string

    cancel_time? : Date // Order cancel time
    cancel_comment? : string       //"Lich chuyen nha bi hoan", // Cancelled reason by user or supplier
    cancel_by_user? : boolean, // True if this order is cancelled by user, otherwise False

    expected_delivery_date?: Date

    isRated? : boolean

    //tính tiền
    fee: number //phí dịch vụ
    total: number //tổng tiền
    

    createdAt?: Date
    updatedAt?: Date
}

//thông tin dịch vụ
export interface NoteOrder {
    isChecked: 0 | 1, // 0 là ko cho kiem hang // 1 là có kiem haang
    payShippingFee: 0 | 1, // 0: nguoi gui tra~, 1: nguoi nhan tra~
    productValue:number // dinh gia san pham
    cod : 0 | 1 //0 là có thu hộ //1là ko thu hô
    codValue?:number //thu hộ
    pickUpAtPlace: boolean // true la lay hang tan noi // false la lay hang tai kho
}

// Pickup and drop-offs information
export interface Information {
    name:	string	//Recipient's name. Optional if is path[0].
    phone:	string	//Recipient's mobile number. Optional if is path[0].
    address:string	//Address of the location.
    note : string
    addressDetail?:string
       
    lat?:	number	//Latitude of the location.
    lng?:	number	//Longitude of the location.
}


export interface Product {
    name : string
    quantity:number
    volume : number

    price : number
    description? : string

    images? : string[]
}
   





//     //---------# Status, Service, Request--------------------

//     status :	String	//Order status more detail.
//     service_id:	String	//Service ID.
//     city_id	:String	//City ID.
    
//     //---------# User ID & Supplier ID--------------------

//     user_id	:String	//User ID who created this order.
//     user_name:	String	//User name who created this order.
//     supplier_id:	String //Supplier who accepted this order.
//     supplier_name:	String	//Supplier name

//     //---------#time-------------------

//     create_time:	Date	//Time when order was created, in epoch timestamp format.
//     order_time:	    Date	//Time user want supplier to pick up his package, in epoch timestamp format.
//     accept_time:	Date	//Time when a supplier accept an order, in epoch timestamp format
//     board_time:	    Date	//Time when a supplier come to user place, in epoch timestamp format.
//     pickup_time:	Date	//Time when a supplier pick up user package successfully, in epoch timestamp format.
//     cancel_time:	Date	//Time when an order was cancelled, in epoch timestamp format.
//     cancel_comment : string, //Cancelled reason by user or supplier
//     cancel_by_user : string  //Cancelled by user or supplier
//     complete_time:	Date	 //Time when an order was completed, in epoch timestamp format.
   
//     //---------# Payment-------------------
    
//     currency:	String	//Currency (ISO 4217 currency code)
//     promo_code:	String	//Promotion code to be applied
//     payment_method:	String	//Method which user chooses to pay for this order (Available methods: CASH
//     request_fee:	Number	//Extra fee for adding special request to the order (Will be removed after December 1st, 2019)
//     discount:	Number	//Discount (Will be removed after December 1st, 2019)

//      //---------  # Use credit from user account if available-------------------

//     user_bonus_account:	Number	//The amount of credit which is deducted fron user bonus account if bonus account have enough credit
//     user_main_account:	Number	//The amount of credit which is deducted fron user main account if main account have enough credit
//     total_pay:	Number	//The amount of CASH that user has to pay for this order (Total pay = Total fee - User Main account - User Bonus account)
   
//     //---------#discount	----------	----------
//     distance_price:	Number	//ervice fee calculated based on distance (alternaltive for distance_fee)
//     special_request_price:	Number	//Extra fee for adding special request to the order (alternaltive for request_fee)
//     stoppoint_price:	Number	//Stop fee for multiple drop-offs (alternaltive for stop_fee)
//     voucher_discount:	Number	//Discount (alternaltive for discount)
//     subtotal_price:	Number	//Sum of distance price, special_request_price,stoppoint_price (alternaltive for total_fee)
//     total_price:	Number	//Final price, equals subtotal_price - voucher_discount



//# Parameters
// {
//     "order_time": 0,
//     "path": [
//       {
//         "lat": 10.7692105,
//         "lng": 106.6637935,
//         "address": "725 Hẻm số 7 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Việt Nam",
//         "addressDetail": "Quận 10",
//         "name": "nmbmb",
//         "remarks": "call me"
//       },
//       {
//         "lat": 10.7828887,
//         "lng": 106.704898,
//         "address": "Miss Ao Dai Building, 21 Nguyễn Trung Ngạn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
//         "name": "Bao"
//       }
//     ],
//     "service_id": "SGN-BIKE",
//     "requests": [],
//     "images": [],
//     "promo_code": "KHUYENMAI",
//     "remarks": "Call me when arrived",
//     "payment_method": "CASH",
//     "items": [
//       {
//         "_id": "TS",
//         "num": 2,
//         "name": "Sua tuoi",
//         "price": 15000
//       },
//       {
//         "_id": "ST",
//         "num": 2,
//         "name": "Sinh to lua mach",
//         "price": 30000
//       }
//     ]
// }