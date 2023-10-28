import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymDetialsService {

  gymDetailData:any;

  constructor() { }

  setGymData(gymData:any)
  {
    this.gymDetailData = gymData;
  }

  getGymData()
  {
    return this.gymDetailData;
  }

}
