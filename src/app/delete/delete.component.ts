import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialogueComponent } from '../dialogue/deleteDialogue.component';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { EmployeeService } from '../Services/employee/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  firstName:string|null = '';
  employeeList:any[] = [];

  

  constructor(private _route:ActivatedRoute, private _empService:EmployeeService,
    private dialog:MatDialog,) { }

  ngOnInit(): void {
    this.firstName = this._route.snapshot.paramMap.get('name');
    this.employeeList = this._empService.getSelectedData(this.firstName);
    
  }

  openDialog(){
    this.dialog.open(DeleteDialogueComponent)
  }

}
