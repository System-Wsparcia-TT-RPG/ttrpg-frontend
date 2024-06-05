import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUrl = 'http://localhost:8000/api/receive_data/'; // API endpoint

  private loggedUser = "";
  private isLogged = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<any> {
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

  logout() {
    this.loggedUser = "";
    this.isLogged = false;
    this.router.navigate(['/home']);
  }

  setLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  
  }

  isLoggedIn() {
    return this.isLogged;
  }

  setLoggedUser(user: string) {
    this.loggedUser = user;
  }

  getLoggedUser() {
    return this.loggedUser;
  }
}
