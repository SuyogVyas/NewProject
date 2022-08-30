import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogueComponent } from 'src/app/dialogue/dialogue.component';
import { EmpDataService } from 'src/app/Services/data/emp-data.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  firstName:string|null = '';
  employeeList:any;
  constructor(private _route:ActivatedRoute, private _empService:EmployeeService,
    private dialog:MatDialog,private _empDataService:EmpDataService) { }


  ngOnInit(): void {
    this.firstName = this._route.snapshot.paramMap.get('name');
    this._empService.getSelectedData(this.firstName).subscribe((data)=>{
      this.employeeList = data
    })
    console.log(this.employeeList);
  }

  
  openDialog(){
    this.dialog.open(DialogueComponent);
  
}

}
