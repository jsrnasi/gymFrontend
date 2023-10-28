import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GymService } from 'src/app/service/gym.service';


@Component({
  selector: 'app-edit-gym',
  templateUrl: './edit-gym.component.html',
  styleUrls: ['./edit-gym.component.scss']
})
export class EditGymComponent {

  constructor(private http:HttpClient,private gymService:GymService) { 



  }




  
}
