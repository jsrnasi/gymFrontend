import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  gymId:any;

  setGymId(gymId:any)
  {
    this.gymId = gymId;
  }
  getGymId()
  {
    return this.gymId;
  }

  constructor() { }
}
