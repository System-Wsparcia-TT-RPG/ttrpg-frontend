import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUrl = 'http://localhost:8000/api/receive_data/'; // API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    const loginData = {
      operation: 'L',
      login: username,
      password: password
    };

    return this.http.post(this.authUrl, loginData);
  }


  register(userData: string, email: string, password: string): Observable<any> {
    const registerData = {
      operation: 'R',
      login: userData,
      email: email,
      password: password
    };

    return this.http.post(this.authUrl, registerData);
  }
}
