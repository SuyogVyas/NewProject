import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { EmployeeService } from '../Services/employee/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  firstName:string|null = '';
  employeeList:any[] = [];
  constructor(private _route:ActivatedRoute, private _empService:EmployeeService,
    private dialog:MatDialog,) { }


  ngOnInit(): void {
    this.firstName = this._route.snapshot.paramMap.get('name');
    this.employeeList = this._empService.getSelectedData(this.firstName);
    console.log(this.employeeList);
  }

  openDialog(){
    this.dialog.open(DialogueComponent);
  
}

}
