import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Orderlist } from './Order-list';
@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }
  getOrderList(): Observable<Orderlist[]>{
    return this.httpClient.get<Orderlist[]>(`${this.baseURL}`+'/orders');
}


postOrderList(): Observable<Orderlist[]>{
  return this.httpClient.get<Orderlist[]>(`${this.baseURL}`);
}
createOrder(order: Orderlist): Observable<Object>{                                       ///////student.service.ts
  return this.httpClient.post(`${this.baseURL}`+'/orders', order);
}

getOrderById(id: number): Observable<Orderlist>{
  return this.httpClient.get<Orderlist>(`${this.baseURL}`+'/orders'+`/${id}`);
}

updateorder(id: number, order: Orderlist): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}`+'/orders'+`/${id}`, order);
}

deleteOrder(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'/orders'+`/${id}`);
}
}
