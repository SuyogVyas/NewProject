import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDataService } from 'src/app/Services/data/emp-data.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';


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
  employeeList:any;

  constructor(private _route:ActivatedRoute,private _empService:EmployeeService
    ,private _empDataService:EmpDataService) { }

  ngOnInit(): void { 
    this.firstName = this._route.snapshot.paramMap.get('name');
    this._empService.getSelectedData(this.firstName).subscribe((data)=>{
      this.employeeList = data
    })
    console.log(this.employeeList)
  }

}
