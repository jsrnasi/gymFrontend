import { Component } from '@angular/core';
import { OrderidsService } from '../../service/orderids.service';
import { HttpClient } from '@angular/common/http';

declare var Razorpay:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  coupon:any;
  orderIds:any;
  orderData:any;

  constructor(private orderidsService:OrderidsService,private http:HttpClient) {
    this.orderIds = this.orderidsService.getOrderId();
  }

  apply()
  {
    if(this.orderidsService.getOrderType() == 2)
    {
      console.log(this.orderidsService.getPurchaseDetails());
      var purchaseData = {
        "session":window.localStorage.getItem("sessionId"),
        "classId":this.orderidsService.getPurchaseDetails().classId,
        "noOfMonths":this.orderidsService.getPurchaseDetails().noOfMonths,
        "couponCode":this.coupon
      }
      console.log(purchaseData);
      this.http.post<any>('http://139.84.142.47:8080/purchase/class/getOrderId', purchaseData ).subscribe(data => {
        console.log(data);
        this.orderData = data;
        this.orderIds = this.orderData.orderId;
      });
    }
    else{

    
    console.log(this.orderidsService.getPurchaseDetails());
    var purchaseData1 = {
      "session":window.localStorage.getItem("sessionId"),
      "gymId":this.orderidsService.getPurchaseDetails().gymId,
      "noOfMonths":this.orderidsService.getPurchaseDetails().noOfMonths,
      "couponCode":this.coupon
    }
    console.log(purchaseData1);
    this.http.post<any>('http://139.84.142.47:8080/purchase/gym/getOrderId', purchaseData1 ).subscribe(data => {
      console.log(data);
      this.orderData = data;
      this.orderIds = this.orderData.orderId;
    });
  }
  
  }


  payNow() {

    if(this.orderidsService.getOrderType() == 2)
    {
      const RozarpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        key: 'rzp_test_SA5B8Ji1VrIXud',
        order_id: this.orderIds,
        callback_url: "http://139.84.142.47:8080/purchase/class/slot/"+this.orderIds,
        image: 'https://i.imgur.com/FApqk3D.jpeg',
        theme: {
          color: '#6466e3'
        },
        modal: {
          ondismiss:  () => {
            console.log('dismissed')
          }
        }
      }
  
      const successCallback = (paymentid: any) => {
        console.log(paymentid);
      }
  
      const failureCallback = (e: any) => {
        console.log(e);
      }
  
      Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  
    }
    else
    {

    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      key: 'rzp_test_SA5B8Ji1VrIXud',
      order_id: this.orderIds,
      callback_url: "http://139.84.142.47:8080/purchase/gym/slot/"+this.orderIds,
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }
  }
}
