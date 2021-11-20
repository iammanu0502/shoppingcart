import { Injectable } from '@angular/core';
import { Order } from './order/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');
// const headers = new Headers;
// headers.append('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  createOrder(order: Order): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/orders', order);
  }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.baseURL}` + '/orders' + `/${id}`);
  }


  updateOrder(id: number, updateorder: Order): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/orders' + `/${id}`, updateorder);
  }
}
