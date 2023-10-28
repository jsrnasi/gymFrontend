import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-classattc',
  templateUrl: './classattc.component.html',
  styleUrls: ['./classattc.component.scss']
})
export class ClassattcComponent {


  constructor(private http:HttpClient,private attendanceService:AttendanceService) {
   
  }


}
