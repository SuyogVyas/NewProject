import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class ProductService{

    products:any;
    productUrl:string = 'api/productlist'
    

    constructor(private _http:HttpClient){}

    getProductByApi():Observable<any>{
        return this._http.get<any[]>(this.productUrl)
    }

    getProductById(id:any)
    {
        let subject = new ReplaySubject();
        this._http.get<any>(this.productUrl).subscribe((data)=>{
           // this.products = data.filter((e:{id:string|null})=>e.productcode == id)
           this.products = data.find((x: { productcode: any; })=>x.productcode == id) 
           console.log("products"+ this.products)
            subject.next(this.products)
            subject.complete();
        });
        return subject;
    }

   
    
}