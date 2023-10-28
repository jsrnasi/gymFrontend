import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refral',
  templateUrl: './refral.component.html',
  styleUrls: ['./refral.component.scss']
})
export class RefralComponent {

  refralMessage:String = "";
  name:any;
  phoneno:any;
  yourCode:String = '';
  friendsCode:String = '';


  
  constructor(private http:HttpClient,private _router:Router) {
   
  }


  refer()
  {

    var scheduleData = {
      "phoneNo":this.phoneno,
      "name":this.name,
      "session":window.localStorage.getItem("sessionId")
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/referral/do', scheduleData ).subscribe(data => {
    this.refralMessage = data.message;


    this.yourCode=data.yourCode;
    this.friendsCode=data.friendsCode;
  
      console.log(data);
    });




  }

}
