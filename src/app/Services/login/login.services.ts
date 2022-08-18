import { Injectable } from '@angular/core'

@Injectable()

export class LoginService {

    isLoggedIn: boolean = false;

    users: any[] = [
        { email: "admin@gmail.com", password: "admin" },
        { email: "admin1@gmail.com", password: "admin1" },
        { email: "admin2@gmail.com", password: "admin2" },
        
    ]

    login(email: string, password: string) {
        for (var i = 0; i < this.users.length; i++) {
            if (email == this.users[i].email && password == this.users[i].password) {
                return true;
            }
        }
        return false;

    }



    getUserLoginDetails() {
        return this.users;
    }
}