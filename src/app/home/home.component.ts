import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { CardModel } from '../model/cardmodel';
import { ProductService } from '../Services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _productService: ProductService) { }
  productname: any = ''
  practiceform!: FormGroup;
  //subjectt$ = new Subject()
  cardArray:any = []
  card = new CardModel('Suyog','40000')

  ngOnInit(): void {

    this.practiceform = this._fb.group({
      productname: ['']
    })

    this.cardArray.push(this.card)
    
    // this.subjectt$.subscribe(data => {
    //   this.card.name = data;
    // })


  }

  submit(){
    console.log(this.practiceform)

    //this.subjectt$.next(this.practiceform.controls['productname'].value)
    this.card = new CardModel(this.practiceform.controls['productname'].value,'400000')
    this.cardArray.push(this.card)
  }

} 
