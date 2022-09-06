import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCanDeactivateGuardService } from '../Services/employee/emp-deactivate.service';
import { EmployeeListResolverService } from '../Services/employee/emp-resolver.service';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

    {path:'',
        children:[
            {path:'view/:name',component:ViewComponent},
            {path:'emplist',component:EmployeeComponent,resolve:{empList:EmployeeListResolverService}},
            {path:'edit/:name',component:EditComponent},
            {path:'edit',component:EditComponent,canDeactivate:[UserCanDeactivateGuardService]},
            {path:'delete/:name',component:DeleteComponent},
            {path:'delete',component:DeleteComponent}
        ]}
  
//   {path:'employee/view/:name',component:ViewComponent},
//   {path:'employee/edit/:name',component:EditComponent},
//   {path:'employee/edit',component:EditComponent},
//   {path:'employee/delete/:name',component:DeleteComponent},
//   {path:'employee/delete',component:DeleteComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
