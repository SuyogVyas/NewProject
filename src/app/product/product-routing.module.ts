import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [

    {
        path: '',
        children: [
            { path: '', component: ProductComponent },
            { path: 'create', component: ReactiveFormComponent },
            { path: 'edit/:id', component: ProducteditComponent },
            { path: 'view/:id', component: ProductviewComponent }
        ]
    }

    //   {path:'product',component:ProductComponent},
    //   {path:'product/create',component:ReactiveFormComponent},
    //   {path:'product/edit/:id',component:ProducteditComponent},
    //   {path:'product/view/:id',component:ProductviewComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
