import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productlist } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<Productlist[]>{
    return this.httpClient.get<Productlist[]>(`${this.baseURL}`+'/products');
}


postProductList(): Observable<Productlist[]>{
  return this.httpClient.get<Productlist[]>(`${this.baseURL}`);
}
createProduct(productlist: Productlist): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`+'/products', productlist);
}

getProductById(id: number): Observable<Productlist>{
  return this.httpClient.get<Productlist>(`${this.baseURL}`+'/products'+`/${id}`);
}

updateproduct(id: number, productlist: Productlist): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}`+'/products'+`/${id}`, productlist);
}

deleteProduct(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'/products'+`/${id}`);
}
}
