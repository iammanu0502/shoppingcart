import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Updateproduct } from './update-product';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }


  getProductById(id: number): Observable<Updateproduct> {
    return this.httpClient.get<Updateproduct>(`${this.baseURL}` + '/products' + `/${id}`);
  }


  updateProduct(id: number, updateproduct: Updateproduct): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/products' + `/${id}`, updateproduct);
  }
}
