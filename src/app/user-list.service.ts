import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Userlist } from './User-list';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }
  getUserList(): Observable<Userlist[]>{
    return this.httpClient.get<Userlist[]>(`${this.baseURL}`+'/users');
}


postUserList(): Observable<Userlist[]>{
  return this.httpClient.get<Userlist[]>(`${this.baseURL}`);
}
createUser(user: Userlist): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`+'/users', user);
}

getUserById(id: number): Observable<Userlist>{
  return this.httpClient.get<Userlist>(`${this.baseURL}`+'/users'+`/${id}`);
}

updateuser(id: number, order: Userlist): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}`+'/users'+`/${id}`, order);
}

deleteUser(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'/users'+`/${id}`);
}


}
