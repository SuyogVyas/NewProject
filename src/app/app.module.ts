import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';
import { NavbarModule } from './navbar/navbar.module';
import { RegistrationModule } from './registration/registration.module';
import { EmployeeService } from './Services/employee/employee.service';
import { LoginService } from './Services/login/login.services';
import { RegisterService } from './Services/registration/registration.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpDataService } from './Services/data/emp-data.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ProductService } from './Services/product/product.service';
import { ProductModule } from './product/product.module';
import { ReactiveFormComponent } from './product/reactive-form/reactive-form.component';
import { EditComponent } from './employee/edit/edit.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { ProductviewComponent } from './product/productview/productview.component';
import { ProducteditComponent } from './product/productedit/productedit.component';
import { ViewComponent } from './employee/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    ReactiveFormComponent,
    ProductviewComponent,
    ProducteditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    NavbarModule,
    DashboardModule,
    FormsModule,
    EmployeeModule,
    MatDialogModule,
    RegistrationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(EmpDataService),
    ReactiveFormsModule
  ],
  providers: [LoginService,RegisterService,EmployeeService,EmpDataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
