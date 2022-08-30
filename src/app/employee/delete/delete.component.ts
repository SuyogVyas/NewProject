import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialogueComponent } from 'src/app/dialogue/deleteDialogue.component';
import { EmpDataService } from 'src/app/Services/data/emp-data.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  firstName:string|null = '';
  employeeList:any;

  

  constructor(private _route:ActivatedRoute, private _empService:EmployeeService,
    private dialog:MatDialog,private _empDataService:EmpDataService) { }

  ngOnInit(): void {
    this.firstName = this._route.snapshot.paramMap.get('name');
    this._empService.getSelectedData(this.firstName).subscribe((data)=>{
      this.employeeList = data
    })
    
  }

  openDialog(){
    this.dialog.open(DeleteDialogueComponent)
  }

}
