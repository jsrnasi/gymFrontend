import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  customerId:any;
  gymId:any;
  classId:any;
  slotId:any;

  constructor() { }

  setGymId(gymId:any)
  {
    this.gymId = gymId;
  }

  getGymId()
  {
    return this.gymId;
  }

  setClassId(classId:any)
  {
    this.classId = classId;
  }

  getClassId()
  {
    return this.classId;
  }

  setSlotId(slotId:any)
  {
    this.slotId = slotId;
  }

  getSlotId()
  {
    return this.slotId;
  }

  setCustomerId(customerId:any)
  {
    this.customerId = customerId;
  }

  getCustomerId()
  {
    return this.customerId;
  }

}
