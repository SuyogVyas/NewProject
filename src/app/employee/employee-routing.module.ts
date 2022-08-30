import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

    {path:'',
        children:[
            {path:'view/:name',component:ViewComponent},
            {path:'edit/:name',component:EditComponent},
            {path:'edit',component:EditComponent},
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
