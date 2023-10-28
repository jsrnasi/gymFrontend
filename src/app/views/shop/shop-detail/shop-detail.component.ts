import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymDetialsService } from 'src/app/service/gym-detials.service';
import { HttpClient } from '@angular/common/http';
import { OrderidsService } from '../../../service/orderids.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  comment="";
  commentData:any;
  ratingData:any;
  purchaseData:any;

  gymDaetails:any;
  trainerDetail:any = [];
  p1Deatils:any = [];
  p2Deatils:any = [];
  p3Deatils:any = [];

  constructor(private _router: Router,private gymService:GymDetialsService,private http:HttpClient,private orderidsService:OrderidsService) {
    this.gymDaetails = this.gymService.getGymData();
    this.p1Deatils = this.gymDaetails.p1Detail.split("\n");
    this.p2Deatils = this.gymDaetails.p2Detail.split("\n");
    this.p3Deatils = this.gymDaetails.p3Detail.split("\n");



    for(var i=0;i<Math.min(this.gymDaetails.gymTrainers.length,3);i++)
    {
      this.trainerDetail.push(this.gymDaetails.gymTrainers[i]);
    }

    console.log(this.trainerDetail);

    console.log(this.gymDaetails);
   }

  ngOnInit(): void {
    var fetchComments = {
      "gymId":this.gymDaetails.gymId,
      "pageNo":0
    };

    this.http.post<any>('http://139.84.142.47:8080/gym/customer/fetchAll', fetchComments ).subscribe(data => {
      console.log(data);
      this.commentData = data;
    });
  

  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  countStar(star:any) {
    this.selectedValue = star;
  }

addClass(star:any) {
   let ab = "";
   for (let i = 0; i < star; i++) {
     ab = "starId" + i;
     const checkbox = document.getElementById(ab) as HTMLInputElement;
     checkbox.classList.add("selected");
   }
}
removeClass(star:any) {
   let ab = "";
   for (let i = star-1; i >= this.selectedValue; i--) {
     ab = "starId" + i;
     const checkbox = document.getElementById(ab) as HTMLInputElement;
     checkbox.classList.remove("selected");
   }
}

saveComments()
{

  var saveComments = {
    "rating":this.selectedValue,
    "message":this.comment,
    "gymId":this.gymDaetails.gymId,
    "session":window.localStorage.getItem("sessionId")
  };
  console.log(saveComments);

  this.http.post<any>('http://139.84.142.47:8080/gym/customer/addComment', saveComments ).subscribe(data => {
    console.log(data);
    this.commentData = data;
  });


}


purchase(noOfMonths:any)
{
  var purchaseData = {
    "session":window.localStorage.getItem("sessionId"),
    "gymId":this.gymDaetails.gymId,
    "noOfMonths":noOfMonths,
    "couponCode":""
  }
  this.orderidsService.setPurchaseDeatils(purchaseData);

  this.http.post<any>('http://139.84.142.47:8080/purchase/gym/getOrderId', purchaseData ).subscribe(data => {
    console.log(data);
    this.purchaseData = data;
    this.orderidsService.setOrderId(this.purchaseData.orderId);
    this._router.navigate(['./payment'])
  });

}
}
