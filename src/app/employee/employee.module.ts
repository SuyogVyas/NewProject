import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { NavbarModule } from '../navbar/navbar.module';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    NavbarModule,
    EmployeeRoutingModule
  ],
  exports:[
    EmployeeComponent
  ]
})
export class EmployeeModule { }
