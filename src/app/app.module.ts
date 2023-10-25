import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    SearchProductsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
