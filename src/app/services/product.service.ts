import { Injectable } from '@angular/core';
import { ProductListResponse } from 'src/app/ProductResponse';
import { ProductsResponse } from 'src/app/ProductResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = `${enviroment.apiUrl}/products`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient){}
  
  async getAll(): Promise<ProductListResponse> {
    return lastValueFrom(this.httpClient.get<ProductListResponse>(this.baseUrl));
  }

  async getProduct(id: number): Promise<ProductsResponse[]> {
    return lastValueFrom(this.httpClient.get<ProductsResponse[]>(`${this.baseUrl}/${id}`));
  }


}
