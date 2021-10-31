
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { LoginFields } from './login';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subject = new Subject<string>();

  constructor(private http: HttpClient) { }

  getAll(): Observable<LoginFields[]> {
    return this.http.get<LoginFields[]>(baseUrl);
  }


  setUsername(username:string){
    this.subject.next(username);
  }

  getUsername(): Observable<string>{
    return this.subject.asObservable();
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}



