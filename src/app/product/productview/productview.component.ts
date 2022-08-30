import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product/product.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  
  productid: string | null = '';
  productList: any = {};
  constructor(private _productService: ProductService, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    this.productid = this._route.snapshot.paramMap.get('id')
    this._productService.getProductById(this.productid).subscribe((item)=>{
      this.productList = item
      console.log(this.productList)
    })
  }

  
}
