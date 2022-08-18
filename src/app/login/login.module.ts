import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

import { DashboardModule } from '../dashboard/dashboard.module';
import { RegistrationModule } from '../registration/registration.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModule,
    RouterModule,
    RegistrationModule 
   
   
  ],
  exports:[
    LoginComponent,
  ]
})
export class LoginModule { }
