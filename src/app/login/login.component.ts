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

  email: string = ""; //store the value userenters 
  password: string = ""; //store the value userenters  
  isLoggedIn: boolean = false
  isSignup: boolean = false;
  users: any[] = [];
  username:string = ''

  validate() {
    this.isLoggedIn = this.loginService.login(this.email, this.password);
    if (this.isLoggedIn) {

      //if user is valid it will get the login user name,email,password
      this.username = this.loginService.getuserbyemail(this.email)
      console.log(this.username)
      
      //sending the username to display on navbar
      this.loginService.username$.next(this.username)

      //sending boolean value to appcomponent to show navbar
      this.loginService.isUserLoggedIn$.next(this.isLoggedIn)
      
      this._route.navigate(['/home']);
    }
    console.log(this.isLoggedIn);
  }

  openSignUp() {
    this.isSignup = !this.isSignup;
    this._route.navigate(['/register'])
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


  saveUser(form: NgForm) {
    console.log(form)
  }

  constructor(public loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {
    this.users = this.loginService.getUserLoginDetails();
  }

}
