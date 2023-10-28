import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/service/class.service';


@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent {

  constructor(private http:HttpClient,private _router: Router,private classService:ClassService) { 
  }

}
