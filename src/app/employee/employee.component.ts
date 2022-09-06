import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../Services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any[] = [];


  displayedColumns = ['FirstName', 'MiddleName', 'LastName', 'Details']

  constructor(private _empService: EmployeeService,
    private _route: Router, private _actroute: ActivatedRoute) 
    {
   
  }

  ngOnInit(): void {


    //To get data in normal way
    // this.employeeList = this._empService.getEmployeeData();

    //To get data in observable way
    // this._empService.getEmpByApi().subscribe((empdata) => {
    //   this.employeeList = empdata
    //   console.log(this.employeeList)
    // })
    

    this.employeeList = this._actroute.snapshot.data['empList']
    console.log(this.employeeList+"resolver")

  }


  navigate(emp: any) {
    this._route.navigate(['/employee/view', emp.FirstName]);
  }

  editpage(emp: any) {

    this._route.navigate(['/employee/edit', { 'name': emp.FirstName }]);
  }

  deletePage(emp: any) {
    this._route.navigate(['/employee/delete', emp.FirstName], {
      queryParams: { 'name': emp.FirstName, 'gender': emp.gender }, queryParamsHandling: 'merge'
    });
  }


}
