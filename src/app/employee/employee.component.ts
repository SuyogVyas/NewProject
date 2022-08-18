import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList:any[] = [];
  
  displayedColumns = ['FirstName','MiddleName','LastName','Details']

  constructor(private _empService:EmployeeService,private _route:Router) { }

  ngOnInit(): void {
    this.employeeList = this._empService.getEmployeeData();
  }

  navigate(emp:any)
  {
    this._route.navigate(['/view',emp.FirstName]);
  }

  editpage(emp:any)
  {
    this._route.navigate(['/edit',{'name':emp.FirstName}]);
  }

  deletePage(emp:any)
  {
    this._route.navigate(['/delete',emp.FirstName],{
      queryParams:{'name':emp.FirstName,'gender':emp.gender}, queryParamsHandling:'merge'
    });
  }
}
