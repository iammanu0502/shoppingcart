import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './Signup';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  //createSignup: any;
  //private baseURL = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }


  getAll(): Observable<Signup[]> {
    return this.http.get<Signup[]>(baseUrl);
  }

  // get(id: any): Observable<Signup> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}

























//   getUserList(): Observable<Signup[]>{
//     return this.httpClient.get<Signup[]>(`${this.baseURL}`+'/users');
// }

// createSignup(signup: Signup): Observable<Object>{                                       ///////student.service.ts
//   return this.httpClient.post(`${this.baseURL}`+'/users', signup);
// }

// postUserList(): Observable<Signup[]>{
//   return this.httpClient.get<Signup[]>(`${this.baseURL}`);
// }

//   saveSignup(signup: Signup): Observable<Object>{                                       ///////student.service.ts
//   return this.httpClient.post(`${this.baseURL}`+'/users', signup);
// }


// getUserById(id: number): Observable<Signup>{
//   return this.httpClient.get<Signup>(`${this.baseURL}/${id}`);
// }

// }
