import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  isLoggedIn:boolean = false
  isSignup:boolean = false;
  users:any[] = [];
  

  validate()
  {
    this.isLoggedIn =  this.loginService.login(this.email,this.password);
    console.log(this.isLoggedIn);
  }

  openSignUp()
  {
    this.isSignup = !this.isSignup;
    console.log(this.isSignup)
  }

  // opendashboard(){

  //   this.isLoggedIn =  this.loginService.login(this.email,this.password);
  //   console.log(this.isLoggedIn)
  //   if(this.isLoggedIn){
  //     console.log("inside if")
  //     this._route.navigate(['dashboard']);
  //   }
  // }


  saveUser(form:NgForm)
  {
    console.log(form)
  }

  constructor(public loginService: LoginService,private _route:Router) { }

  ngOnInit(): void {
    this.users = this.loginService.getUserLoginDetails();
  }

}
