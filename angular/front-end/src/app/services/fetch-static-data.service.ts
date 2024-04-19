import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchStaticDataService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    // Adjust the path to where your JSON file is stored
    return this.http.get('/assets/example_character.json');
  }
}
