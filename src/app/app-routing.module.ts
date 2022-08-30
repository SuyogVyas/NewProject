import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';

import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './employee/view/view.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './product/productedit/productedit.component';
import { ProductviewComponent } from './product/productview/productview.component';
import { ReactiveFormComponent } from './product/reactive-form/reactive-form.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',redirectTo:'login',pathMatch:'full'},
  {path:'view/:name',component:ViewComponent},
  {path:'edit/:name',component:EditComponent},
  {path:'edit',component:EditComponent},
  {path:'delete/:name',component:DeleteComponent},
  {path:'delete',component:DeleteComponent},
  {path:'product',component:ProductComponent},
  {path:'create',component:ReactiveFormComponent},
  {path:'producteditpage/:id',component:ProducteditComponent},
  {path:'productviewpage/:id',component:ProductviewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
