import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classData:any;
  constructor() { }
  setClassData(classData:any)
  {
    this.classData = classData;
  }
  getClassData()
  {
    return this.classData;
  }
}
