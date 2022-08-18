import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
    
    
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
