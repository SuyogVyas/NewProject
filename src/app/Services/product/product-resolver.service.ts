import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";



@Injectable()
export class ProductListResolveService implements Resolve<any>{
    
    
    constructor(private _productService:ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        return this._productService.getProductByApi()
    }

}