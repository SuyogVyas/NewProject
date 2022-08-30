import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/customvalidators/validators.component';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  productForm!:FormGroup
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.productForm= this._fb.group({
      productcode:[],
      productname:['',[Validators.required,CustomValidators.nameCheck]],
      color:['',Validators.required],
      instockquantity:[null,[Validators.min(1),Validators.max(100),Validators.required]],
      price:[null,Validators.required],
      
      description:['',Validators.required],
      category:['',Validators.required]
    })
  }

  submit(){
    console.log(this.productForm)
    console.log(this.productForm.controls['productname']!.errors!['required'])
    console.log(this.productForm.controls['instockquantity']!.errors!['min'])
  }
}
