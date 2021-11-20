import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addproduct } from './add-product';
import { Updateproduct } from './update-product';
let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  createProduct(product: Addproduct): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/products', product);
  }



  getProductById(id: number): Observable<Updateproduct> {
    return this.httpClient.get<Updateproduct>(`${this.baseURL}` + '/products' + `/${id}`);
  }


  updateProduct(id: number, updateproduct: Updateproduct): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/products' + `/${id}`, updateproduct);
  }

}
