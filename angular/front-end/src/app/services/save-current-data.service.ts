import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveCurrentDataService {

  constructor(private http: HttpClient) {}

  saveData(url: string, body: any, method: string): Observable<any> | null {
    if (method === "PUT") {
      var resp = this.http.put<any>(url, body)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching data, see console';
        })
      );

      return resp;
    } else if (method === "PATCH") {
      var resp = this.http.patch<any>(url, body)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching data, see console';
        })
      );

      return resp;
    }
    return null;
  }

  getData(url: string): Observable<any> {
    var resp = this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching data, see console';
        })
      );

    return resp;
  }
}
