import { Injectable } from '@angular/core'
import { LoginService } from '../login/login.services';

@Injectable()

export class RegisterService {


    registeredUsers: any[] = [
        { email: "admin@gmail.com", password: "admin" }
    ]

    checkEmail(email: string, password: string) {
        if (email == this.registeredUsers[0].email) {
            return true;
        }
        else {
            this.registeredUsers.push({ email: email, password: password })
            return false;
        }
    }

    getUserRegisterDetails() {
        return this.registeredUsers;
    }

    

}