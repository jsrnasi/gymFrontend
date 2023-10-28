import { Component } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-scheduleclass',
  templateUrl: './scheduleclass.component.html',
  styleUrls: ['./scheduleclass.component.scss']
})
export class ScheduleclassComponent {

  constructor(private http:HttpClient,private _router:Router,private attendanceService:AttendanceService) {
    this.viewSlotInfo();

  }


  ngxTimepicker:any;
  slotInfo:any;


  transferSlotNo:any;
  transferGymId:any;
  transferCustomerId:any;
  transferNoOfClasses:any;
  transferNo:any;
  doTransfer:any= false;

  markAttendance(slotNo:any , gymId:any, customerId:any)
  {
    this.doTransfer = false;

    this.attendanceService.setCustomerId(customerId);
    this.attendanceService.setGymId(gymId);
    this.attendanceService.setSlotId(slotNo);
    this._router.navigate(['attending'])
  }

  transfer()
  {

    var scheduleData = {
      "gymId":"45",
      "session":window.localStorage.getItem("sessionId"),
      "slotId":this.transferSlotNo,
      "transferNo":this.transferNo,
      "noOfClassToTransfer":this.transferNoOfClasses
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/transfer/slots', scheduleData ).subscribe(data => {
      console.log(data);
      this.slotInfo = data;
    });


  }
  transferClass(slotNo:any , gymId:any, customerId:any)
  {
    this.transferSlotNo = slotNo;
    this.transferGymId = gymId;
    this.transferCustomerId = customerId;
    this.doTransfer = true;
  }

  viewSlotInfo()
  {
    var scheduleData = {
      "gymId":"6",
      "session":window.localStorage.getItem("sessionId"),
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/slot/info', scheduleData ).subscribe(data => {
      console.log(data);
      this.slotInfo = data;
    });

  }

  checkTime(timex:any, gymId:any, slotNo:any)
  {
    this.doTransfer = false;

    console.log(timex.timepickerTime);
    const timeSplit1 = timex.timepickerTime.split(" ");
    var unit = timeSplit1[1];
    const timeSplit2 = timeSplit1[0].split(":");
    var hour = timeSplit2[0];
    var minute = timeSplit2[1];

    if(unit == "PM")
    {
      hour = parseInt(hour)+12;
    }

    console.log(hour);
    console.log(minute);
    console.log(unit);



    var scheduleData = {
      "gymId":gymId,
      "session":window.localStorage.getItem("sessionId"),
      "slotId":slotNo,
      "hour":hour,
      "minute":minute
    }
    console.log(scheduleData);
    this.http.post<any>('http://139.84.142.47:8080/slot/schedule', scheduleData ).subscribe(data => {
      console.log(data);
    });


  }
}
