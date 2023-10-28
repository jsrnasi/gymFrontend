import { Component } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-classschc',
  templateUrl: './classschc.component.html',
  styleUrls: ['./classschc.component.scss']
})
export class ClassschcComponent {
  constructor(private http:HttpClient,private _router:Router,private attendanceService:AttendanceService) {


  }

}
