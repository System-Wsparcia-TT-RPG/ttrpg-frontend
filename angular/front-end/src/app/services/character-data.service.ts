import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Character, Full } from '../models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {
  private apiUrl = 'http://localhost:8000/api';

  private _characters = new BehaviorSubject<Map<number, Full<Character>>>(
    new Map()
  );
  characters$ = this._characters.asObservable();

  private _currentCharacter = new BehaviorSubject<Full<Character>>(
    {} as Full<Character>
  );
  currentCharacter$ = this._currentCharacter.asObservable();

  private _charId = new BehaviorSubject<number>(0);
  charId$ = this._charId.asObservable();

  get characters(): Full<Character>[] {
    return [...this._characters.value.values()];
  }

  set characters(characters: Full<Character>[]) {
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this._characters.next(new Map(characters.map(x => [x.id, x])));
  }

  get currentCharacter(): Full<Character> {
    // TODO: add null checks to code using currentCharcter
    return this._characters.value.get(this.charId) as Full<Character>;
  }

  set currentCharacter(character: Full<Character>) {
    // Modify this code for on-change behavior, e.g send request to the backend (or so I think :) )
    this.characters = this.characters.map((x) =>
      x.id == character.id ? character : x
    );
  }

  get charId(): number {
    return this._charId.value;
  }

  set charId(newId: number) {
    let character = this._characters.value.get(newId);
    if (character) {
      this._charId.next(newId);
      this._currentCharacter.next(character);
    }
  }

  constructor(private http: HttpClient, private userService: UserService) {}

  getCharacters(): Observable<Full<Character>[]> {

    if (!this.userService.isLoggedIn()) {
      return new Observable<Full<Character>[]>((subscriber) => {
        subscriber.error('User not logged in');
      });
    }

    let resp = this.http.get<Full<Character>[]>(this.apiUrl + "/character/all/4/").pipe(
      catchError((error) => {
        console.error('Error fetching characters:', error);
        throw 'Error fetching characters, see console';
      })
    );

    resp.subscribe({
      next: (data) => {
        this.characters = data;
        if (this.characters.length > 0) {
          this.charId = 0;
          this.currentCharacter = this.characters[this.charId];
        }
      },
      error: async (e) => {
        // We can check error status here
        console.error(e);
      },
    });

    return resp;
  }

  getCharacter(id: number): Observable<Full<Character>> {
    // not needed while keeping all the characters?
    let resp = this.http
      .get<Full<Character>>(`${this.apiUrl}/character/${id}/4/`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching character:', error);
          throw 'Error fetching character, see console';
        })
      );
    return resp;
  }

  deleteCharacter(id: number): Observable<void> {
    let response = this.http
      .delete(`${this.apiUrl}/character/${id}/`)
      .pipe(
        map((_) => {}),
        finalize(() => {
          this.characters = this.characters.filter((x) => x.id != id);
        })
      );

    return response;
  }
}
