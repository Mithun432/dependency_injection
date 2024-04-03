import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
   datas:any[]=[
    {ID:"1",Name:"Gokul",Designation:"Developer"},
    {ID:"2",Name:"Rimi",Designation:"Tester"},
    {ID:"3",Name:"Arjun",Designation:"Developer"},
    {ID:"4",Name:"Yamuna",Designation:"Developer"},
    {ID:"5",Name:"Kavya",Designation:"Tester"},
  ]

  constructor() { }
  getdetails(){
    return this.datas;
  }
}
