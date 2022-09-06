import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/customvalidators/validators.component';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  productid:string|null = '';
  productList:any = {};
  
  productForm!: FormGroup;
  constructor(private _fb:FormBuilder,private _productService:ProductService,private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.productForm= this._fb.group({
      productcode:[],
      productname:['',[Validators.required,CustomValidators.nameCheck]],
      color:['',Validators.required],
      instockquantity:[null,[Validators.min(1),Validators.max(100),Validators.required]],
      price:[null,Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
      category:['',Validators.required]
    })

    //

    this.productid = this._route.snapshot.paramMap.get('id')
    this._productService.getProductById(this.productid).subscribe((item)=>{
      this.productList = item
      // console.log(this.productList)
    })
  }

  submit(){
    // console.log("productform")
    // console.log(this.productForm)

    // console.log("productform.controls")
    // console.log(this.productForm.controls['productname'].value)

    this._productService.productSubject$.next(this.productForm.controls['productname'].value)
  }

  openDialog(){
    
  }
}

