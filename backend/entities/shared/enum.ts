export enum AuthorityRole {
    User = 'user',
    Admin = 'admin',
    Driver = 'driver',
}

export enum OrderStatus {
    IDLE = 'idle', ///Order confirmed
    ASSIGNING = 'assigning', //Finding a supplier ( tìm tài xế)
    ACCEPTED='accepted', // Once supplier accepts the order, the order status will be changed to ACCEPTED (tài xế nhận đơn)
    INPROCESS='inprocess',	//When the supplier collects the food at the restaurant, he will click “Pick up” and the order status will be changed to IN PROCESS
    COMPLETED='completed',  //When the supplier completes the order, the order status will be changed to COMPLETED
    CANCELLED='cancelled', //When the supplier cancels the order, the order status will be changed to CANCELLED
    REDELIVERY='re-delivery', //(chò giao lai)
}

export enum DeliveryStatus {
    PICKUP ='pickup',	//When the supplier collects the food at the restaurant, he will click “Pick up” and the order status will be changed to IN PROCESS
    COMPLETED='completed',  //When the supplier completes the order, the order status will be changed to COMPLETED
    CANCELLED='cancelled', //When the supplier cancels the order, the order status will be changed to CANCELLED
}
export enum ActiveStatus {
    ACTIVE ='active',	
    INACTIVE='inactive',
}

// export enum ServiceType{
//     DSS ='delivery standard service',
//     DFS ='delivery fast service',
// }
export enum ServiceType{
    DSS ='dss',
    DFS ='dfs',
}