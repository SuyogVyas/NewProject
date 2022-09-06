import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EditComponent } from "src/app/employee/edit/edit.component";


@Injectable()
export class UserCanDeactivateGuardService implements CanDeactivate<EditComponent>{
    constructor(){}
        
    canDeactivate(component: EditComponent):boolean{
        
      if(component.createUserForm.dirty){
        console.log("discard")
        return confirm("Are u sure you want to discard?.")
      }
      else{
        console.log("discard else" )
        return true;
      }
        
    }


}