import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prod } from './prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }


  // findByCategory(id: number, electronics: Prod): Observable<Object>{
  //   return this.http.get(`${this.baseURL}`+'/products'+`/${id}`, electronics);
  // }


  // findByCategory(p_category: any): Observable<Prod[]>{
  //   return this.http.get<Prod[]>(`${this.baseURL}`+'/products'+`/${p_category}`);
  // }



  public findByCategory(): Observable<Prod[]>{
    return this.http.get<Prod[]>(`${this.baseURL}`+'/products/p_category/{Electronics}');
  }



  public getProducts(): Observable<Prod[]> {
    return this.http.get<Prod[]>(`${this.baseURL}/products`); //this is api hit to read all the records
  }
}
