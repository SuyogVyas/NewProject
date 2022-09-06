import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:any[] = [];
  displayedColumns = ['image','productname','price','category','Actions']


  constructor(private _productService:ProductService,private _route:Router,private _actroute:ActivatedRoute) { 
    this.productList = _actroute.snapshot.data['productlist'];
  }

  ngOnInit(): void {

    // this._productService.getProductByApi().subscribe((data)=>{
    //   this.productList = data
    // })
  }

  navigate(){
    this._route.navigate(['/product/create'])
  }

  editpage(product:any){
    console.log("edit")
    this._route.navigate(['/product/edit',product.productcode])
  }


  viewpage(product:any){
    this._route.navigate(['/product/view',product.productcode])
  }

}
