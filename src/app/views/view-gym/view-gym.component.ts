import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GymService } from 'src/app/service/gym.service';
import { QrcodeService } from 'src/app/service/qrcode.service';

@Component({
  selector: 'app-view-gym',
  templateUrl: './view-gym.component.html',
  styleUrls: ['./view-gym.component.scss']
})
export class ViewGymComponent {

  constructor(private http:HttpClient,private _router: Router,private gymService:GymService,private qrcodeService:QrcodeService) { 
  }

}
