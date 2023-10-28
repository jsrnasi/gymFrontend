import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassDetailsService {


  classDetailData:any;

  constructor() { }

  setClassData(classData:any)
  {
    this.classDetailData = classData;
  }

  getClassData()
  {
    return this.classDetailData;
  }

}
