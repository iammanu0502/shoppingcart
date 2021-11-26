import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './Signup';
let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

const baseUrl = 'http://localhost:8080/api';
const baseUrllogin = 'http://localhost:8080/api/login';

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


  // getUser(email_id: any): Observable<Signup>{
  //   return this.http.get<Signup>(`${baseUrl}`+'/email_id'+`/${email_id}`);
  // }
  public findByEmail_id(email_id: any): Observable<Signup[]>{
    return this.http.get<Signup[]>(`${baseUrl}`+'/users/email_id/{email_id}}');
  }


  getUser(email_id: any): Observable<Signup> {
    return this.http.get<Signup>(`${baseUrl}/${email_id}`);         // calling all the users needs to be fixed
   }

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  create(signup: Signup): Observable<Object>{                                       ///////user.service.ts
  return this.http.post(`${baseUrl}`+'/save-user', signup);
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
