import { Component, OnInit } from '@angular/core';
import { ClassDetailsService } from 'src/app/service/class-details.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderidsService } from '../../../service/orderids.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  constructor(private classDetailsService:ClassDetailsService,private _router: Router,private http:HttpClient,private orderidsService:OrderidsService) {



   }

  ngOnInit(): void {


  }


}
