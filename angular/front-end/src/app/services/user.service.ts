import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUrl = 'http://localhost:8000/api/receive_data/'; // API endpoint

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem("isLogged") === null) {
        localStorage.setItem("isLogged", "false");
      }
      if (localStorage.getItem("loggedUser") === null) {
        localStorage.setItem("loggedUser", "");
      }
    }
  }

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
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("loggedUser", "");
      localStorage.setItem("isLogged", "false");
    }
    this.router.navigate(['/home']);
  }

  setLogged(isLogged: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("isLogged", isLogged.toString());
    }
  }

  isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("isLogged") === "true";
    }
    return false;
  }

  setLoggedUser(user: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("loggedUser", user);
    }
  }

  getLoggedUser() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("loggedUser");
    }
    return null;
  }
}

