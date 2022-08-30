import { Injectable } from '@angular/core'
import { ReplaySubject, Subject } from 'rxjs';

@Injectable()

export class LoginService {

    isLoggedIn: boolean = false;
    username$:any = new ReplaySubject()
    isUserLoggedIn$:any = new Subject()
    isUserLoggedOut$:any = new Subject()
    users: any[] = [
        {username:'admin', email: "admin@gmail.com", password: "admin" },
        {username:'admin1', email: "admin1@gmail.com", password: "admin1" },
        {username:'admin2', email: "admin2@gmail.com", password: "admin2" },
        
    ]

    login(email: string, password: string) {
        for (var i = 0; i < this.users.length; i++) {
            if (email == this.users[i].email && password == this.users[i].password) {
                this.isLoggedIn = true;
                return true;
            }
        }
        return false;

    }

    getIsLoggedIn(){
        return this.isLoggedIn
    }

    getUserLoginDetails() {
        return this.users;
    }


    getuserbyemail(email:string)
    {
        for(var i=0;i< this.users.length; i++)
        {
            if(email == this.users[i].email)
            {
                return this.users[i].username;
            }
        }
    }
}