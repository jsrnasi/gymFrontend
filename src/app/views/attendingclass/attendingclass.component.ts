import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-attendingclass',
  templateUrl: './attendingclass.component.html',
  styleUrls: ['./attendingclass.component.scss']
})
export class AttendingclassComponent {


  currentTime = Date.now();
  attendingData :any;
  constructor(private http:HttpClient,private attendanceService:AttendanceService) {
    this.viewAttending();
  }

  viewAttending()
  {

    var scheduleData = {
      "gymId":this.attendanceService.getGymId(),
      "session":window.localStorage.getItem("sessionId"),
      "slotId":this.attendanceService.getSlotId()
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/attendance/info', scheduleData ).subscribe(data => {
      console.log(data);
      this.attendingData = data;
    });

  }


  markAttendance(attendId:any)
  {
    var scheduleData = {
      "attendId":attendId
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/attendance/mark', scheduleData ).subscribe(data => {
      console.log(data);
    });

  }


}
