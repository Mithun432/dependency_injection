import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empdetails',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './empdetails.component.html',
  styleUrl: './empdetails.component.scss'
})
export class EmpdetailsComponent implements OnInit{
  empdatas:any =[];
  constructor(private demoservice : EmpserviceService){}
  ngOnInit() {
      this.empdatas=this.demoservice.getdetails();
  }

}
