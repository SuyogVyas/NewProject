import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NavbarModule } from '../navbar/navbar.module';
import { AppRoutingModule } from '../app-routing.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    NavbarModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
