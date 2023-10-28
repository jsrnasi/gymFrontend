import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {


  constructor(private http:HttpClient,private locationService:LocationService) { 

  }

}


