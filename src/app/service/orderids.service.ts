import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderidsService {

  orderId:any;
  purchaseDetails:any;
  orderType:any;

  constructor() { }


  setOrderType(orderType:any)
  {
    this.orderType = orderType;
  }
  getOrderType()
  {
    return this.orderType;
  }

  setOrderId(orderId:any)
  {
    this.orderId = orderId;
  }
  setPurchaseDeatils(purchaseDetails:any)
  {
    this.purchaseDetails = purchaseDetails;
  }

  getOrderId()
  {
    return this.orderId;
  }
  getPurchaseDetails()
  {
    return this.purchaseDetails;
  }

}
