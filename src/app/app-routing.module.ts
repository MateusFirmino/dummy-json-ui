import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchProductsComponent } from './components/search-products/search-products.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '',component:SearchProductsComponent},
  {path:'newProduct',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
