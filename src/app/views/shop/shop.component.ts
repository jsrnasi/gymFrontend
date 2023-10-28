import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';
import { GymDetialsService } from 'src/app/service/gym-detials.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  gymData :any;
  gymQueryParameter :any;
  parameter:any="";

  latitude:any;
  longitude:any;


  constructor(private http:HttpClient,private _router: Router,private locationService:LocationService
    ,private gymService:GymDetialsService) {
    this.getLocation();
   }

  async getLocation() {
    const position: any = await this.locationService.getCurrentLocation();
    this.latitude = position.lat;
    this.longitude = position.lng;
    this.gymQueryParameter = {
      "parameter":"location:"+this.latitude+":"+this.longitude,
      "pageNo":0,
      "records":20  
    };
    this.viewAllGyms();

  }

  ngOnInit(): void {
  }

  viewAllGyms()
  {
    this.http.post<any>('http://139.84.142.47:8080/gym/customer/getAll', this.gymQueryParameter ).subscribe(data => {
      console.log(data);
      this.gymData = data;
    });
  }
  
  searchKeyword(param:any)
  {
    this.parameter = param;
    this.gymQueryParameter = {
      "parameter":this.parameter,
      "pageNo":0,
      "records":2  
    };
    console.log(this.gymQueryParameter);
    this.viewAllGyms();
  }

  gymDetails(gym:any)
  {
    this.gymService.setGymData(gym);
    this._router.navigate(['./shop/product-detail'])
  }

}
