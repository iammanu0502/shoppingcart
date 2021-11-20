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
  public getProducts(): Observable<Prod[]> {
    return this.http.get<Prod[]>(`${this.baseURL}/products`); //this is api hit to read all the records
  }
}
