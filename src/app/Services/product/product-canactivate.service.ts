import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable()
export class ProductCanActivateServiceGuard implements CanActivate{

    constructor(private _productService:ProductService,private _router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        
        const id = route.paramMap.get('id');

        const empExists = this._productService.getProductById(id as string).subscribe(data=>{
            if(data)
            {
                return true;
            }
            else{
                this._router.navigate(['/pagenotfound']);
                return false;
            }
        })
        return true;
    }

}