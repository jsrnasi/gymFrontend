import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from 'src/app/service/location.service';


@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.component.html',
  styleUrls: ['./add-gym.component.scss']
})
export class AddGymComponent {

  constructor(private http:HttpClient,private locationService:LocationService) { 

  }


}

