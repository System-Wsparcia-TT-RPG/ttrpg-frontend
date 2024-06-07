import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';

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
      username: username,
      password: password
    };

    return this.http.post('http://localhost:8000/api/token/', loginData).pipe(
      tap((response: any) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem(this.accessTokenKey, response.access);
          localStorage.setItem(this.refreshTokenKey, response.refresh);
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("loggedUser", username);
        }
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {

    const registerData = {
      username: username,
      // email: email,
      password: password
    };

    return this.http.post('http://localhost:8000/api/user/create/', registerData);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.accessTokenKey);
      localStorage.removeItem(this.refreshTokenKey);
      localStorage.setItem("loggedUser", "");
      localStorage.setItem("isLogged", "false");
    }
    this.router.navigate(['/home']);
  }

  getAccessToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.accessTokenKey);
    }
    return null;
  }

  getRefreshToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.refreshTokenKey);
    }
    return null;
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
