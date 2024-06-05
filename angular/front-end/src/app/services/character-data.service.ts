import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  private dataUrl = 'http://localhost:8000/api/character/all'; // API endpoint

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

  getCharacter(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/character/${id}/3/`)
      .pipe(
        catchError(error => {
          console.error('Error fetching character:', error);
          throw 'Error fetching character, see console';
        })
      );
  }
}
