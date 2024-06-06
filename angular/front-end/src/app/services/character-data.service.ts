import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Character, Full } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  private dataUrl = 'http://localhost:8000/api/character/all/4/'; // API endpoint

  private _characters = new BehaviorSubject<Full<Character>[]>([]);
  characters$ = this._characters.asObservable()

  private _currentCharacter = new BehaviorSubject<Full<Character>>({} as Full<Character>);
  currentCharacter$ = this._currentCharacter.asObservable();

  private _charId = new BehaviorSubject<number>(0);
  charId$ = this._charId.asObservable();

  get characters(): Full<Character>[] {
    return this._characters.value;
  }

  set characters(characters: Full<Character>[]) { 
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this._characters.next(characters)
  }

  get currentCharacter(): Full<Character> {
    // return only if current charId is within the length of characters
    // TODO: add null checks to code using currentCharcter
    return (this.charId >= 0 && this.charId < this.characters.length ? this.characters[this.charId] : null) as Full<Character>; 
  }

  set currentCharacter(character: Full<Character>) {
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this.characters[this.charId] = character;
  }

  get charId(): number {
    return this._charId.value;
  }

  set charId(newId: number) {
    this._charId.next(newId);
    this._currentCharacter.next(this.characters[newId]);    
  }

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Full<Character>[]> {
    let resp = this.http.get<Full<Character>[]>(this.dataUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching characters:', error);
          throw 'Error fetching characters, see console';
        })
      );
    
    resp.subscribe({
      next: data => {
        this.characters = data;
        if (this.characters.length > 0){
          this.charId = 0;
          this.currentCharacter = this.characters[this.charId];
        }

      },
      error: async e => { // We can check error status here
        console.error(e);
      }
    })

    return resp;
  }

  getCharacter(id: number): Observable<Full<Character>> { // not needed while keeping all the characters?
    let resp = this.http.get<Full<Character>>(`http://localhost:8000/api/character/${id}/4/`)
      .pipe(
        catchError(error => {
          console.error('Error fetching character:', error);
          throw 'Error fetching character, see console';
        })
      );
    return resp;
  }
}
