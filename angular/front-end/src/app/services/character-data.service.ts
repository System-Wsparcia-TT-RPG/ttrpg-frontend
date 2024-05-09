import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  private dataUrl = 'http://localhost:8000/api/characters/'; // API endpoint

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.dataUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching characters, see console';
        })
      );
  }
}
