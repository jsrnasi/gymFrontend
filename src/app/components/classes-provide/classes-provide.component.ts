import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';
import { ClassDetailsService } from 'src/app/service/class-details.service';

@Component({
  selector: 'app-classes-provide',
  templateUrl: './classes-provide.component.html',
  styleUrls: ['./classes-provide.component.scss']
})
export class ClassesProvideComponent implements OnInit {



  constructor(private http:HttpClient,private _router: Router,private locationService:LocationService
    ,private classService:ClassDetailsService) {

     }


  ngOnInit(): void {
  }


}
