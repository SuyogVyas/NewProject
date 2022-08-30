import { Component } from '@angular/core';
import { LoginService } from './Services/login/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  
  constructor(private _loginService:LoginService){}

  isLoggedIn:boolean = false;
  isLoggedOut:boolean = false;

  ngOnInit()
  {
    this._loginService.isUserLoggedIn$.subscribe((data:boolean)=>{
      this.isLoggedIn = data;
    })

    

    this._loginService.isUserLoggedOut$.subscribe((data:boolean)=>{
      this.isLoggedOut = data;
    })
  }

 
}
