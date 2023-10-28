import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  gymData:any;
  constructor() { }

  setGymData(gymData:any)
  {
    this.gymData = gymData;
  }

  getGymData()
  {
    return this.gymData;
  }

}
