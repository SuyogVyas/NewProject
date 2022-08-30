import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent implements OnInit {

  users:any[] = [];
  newEmail:string = "";
  newPassword:string = "";
  isEmailValid:boolean = false;

  checkIfEmailAlreadyExists()
  {
   this.isEmailValid = this.registerService.checkEmail(this.newEmail,this.newPassword)
  }

  constructor(public registerService:RegisterService,private _route:Router) { }

  ngOnInit(): void {
    this.users = this.registerService.getUserRegisterDetails();
  }

  registerUser(form:NgForm)
  {
    console.log(form);
  }

  backToSignIn(){
    this._route.navigate(['login'])
  }

}
