import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products/add', component: FormProductComponent},
  {path: 'products/edit/:id', component:FormProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
