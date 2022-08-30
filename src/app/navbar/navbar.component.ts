import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _route: Router, private _loginService: LoginService) { }

  isLoggedOut: boolean = false;
  isLoggedIn: boolean = true;
  isSignin:boolean = true;

  username: string = '';
  ngOnInit() {


    //get the username from login to display on navbar
    this._loginService.username$.subscribe((data: any) => {
      this.username = data
      console.log("data" + data)
    })
    console.log("username is " + this.username)

    
  }

  logout() {
    this.isLoggedOut = true
    this.isLoggedIn = false;
    this.isSignin = false;
    this._loginService.isUserLoggedOut$.next(this.isLoggedOut)
    this._loginService.isUserLoggedIn$.next(this.isLoggedIn)
    this._loginService.isRegister$.next(this.isSignin)
    this._route.navigate(['/'])
  }
}
