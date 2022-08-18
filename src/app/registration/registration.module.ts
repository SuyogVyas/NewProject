import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { LoginModule } from '../login/login.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  
    
  ],
  exports:[
    RegistrationComponent
  ]
})
export class RegistrationModule { }
