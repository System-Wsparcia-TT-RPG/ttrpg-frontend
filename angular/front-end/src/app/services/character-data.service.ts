import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  private dataUrl = 'http://localhost:8000/api/character/all/4/'; // API endpoint

  private _characters = new BehaviorSubject<any[]>([]);
  characters$ = this._characters.asObservable()

  private _currentCharacter = new BehaviorSubject<any>({});
  currentCharacter$ = this._currentCharacter.asObservable();

  private _charId = new BehaviorSubject<number>(-1);
  charId$ = this._charId.asObservable();

  get characters(): any[] {
    return this._characters.value;
  }

  set characters(character: any) { 
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this._characters.next(character)
  }

  get currentCharacter(): any | null {
    const charId = this._charId.value;
    // return only if current charId is within the length of characters
    return charId >= 0 && charId < this.characters.length ? this.characters[charId] : null;
  }

  set currentCharacter(character: any) {
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this.characters[this.charId] = character;
  }

  get charId(): number {
    return this._charId.value;
  }

  set charId(newId: number) {
    this._charId.next(newId);
    this.currentCharacter = this.characters[newId]
  }


  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    var resp = this.http.get(this.dataUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching characters, see console';
        })
      );
    
    resp.subscribe({
      next: data => {
        this.characters = data
      },
      error: async e => { // We can check error status here
        console.error(e)
      }
    })

    return resp;
  }

  getCharacter(id: number): Observable<any> { // not needed while keeping all the characters?
    var resp = this.http.get(`http://localhost:8000/api/character/${id}/4/`)
      .pipe(
        catchError(error => {
          console.error('Error fetching character:', error);
          throw 'Error fetching character, see console';
        })
      );
    
    resp.subscribe({
      next: data => {
        try {
          this.charId = id;
          this.currentCharacter = data
        }
        catch (_e){
          console.error(_e);
        }
      },
      error: async e => {
        console.error(e);
      }
    })
    return resp;
  }
}
