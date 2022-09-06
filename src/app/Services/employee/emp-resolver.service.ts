import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeService } from "./employee.service";


@Injectable()
export class EmployeeListResolverService implements Resolve<any>{
    
    
    constructor(private _empService:EmployeeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        return this._empService.getEmpByApi();
    }

}