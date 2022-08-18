import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../Services/employee/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  firstName:string|null = '';
  lastName:string|null = '';
  mname:string|null = '';
  gender:string|null = '';
  employeeList:any[] = [];

  constructor(private _route:ActivatedRoute,private _empService:EmployeeService) { }

  ngOnInit(): void { 
    this.firstName = this._route.snapshot.paramMap.get('name');
    this.employeeList = this._empService.getSelectedData(this.firstName);
    console.log(this.employeeList)
  }

}
