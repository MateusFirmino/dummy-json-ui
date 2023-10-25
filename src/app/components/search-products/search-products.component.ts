import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListResponse } from 'src/app/ProductResponse';
import { ProductsResponse } from 'src/app/ProductResponse';


@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
productsList: ProductsResponse[] = [];

  constructor(private productService: ProductService){
    this.getAllProducts;
   
  }

  ngOnInit(): void{
    this.getAllProducts();
    
  }

  async getAllProducts(){
    const result = await this.productService.getAll();
    this.productsList = result.products;
  }
  
}
