import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Character, CombatStats, Full1, Model } from '../models';

type WithoutId<T> = Omit<T, 'id'>;

type InputData<T extends Model, D> = {
  [K in keyof WithoutId<T>]: [T, K] extends D
    ? Full1<T>[K] extends Model
      ? InputData<Full1<T>[K], D>
      : never
    : T[K];
};

export type CreateCharacterInput = InputData<
  Character,
  | [Character, 'details']
  | [Character, 'treasure']
  | [Character, 'ability_scores']
  | [Character, 'skills']
  | [Character, 'saving_throws']
  | [Character, 'combat']
  | [CombatStats, 'death_saves']
>;

@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  createCharacter(data: CreateCharacterInput): Observable<number> {
    return this.http
      .post<Model>(
        `${this.apiUrl}/death_saves/create/`,
        data.combat.death_saves
      )
      .pipe(
        mergeMap((model) => {
          return zip(
            this.http.post<Model>(
              `${this.apiUrl}/treasure/create/`,
              data.treasure
            ),
            this.http.post<Model>(
              `${this.apiUrl}/details/create/`,
              data.details
            ),
            this.http.post<Model>(
              `${this.apiUrl}/ability_scores/create/`,
              data.ability_scores
            ),
            this.http.post<Model>(`${this.apiUrl}/skills/create/`, data.skills),
            this.http.post<Model>(
              `${this.apiUrl}/saving_throws/create/`,
              data.saving_throws
            ),
            this.http.post<Model>(`${this.apiUrl}/combat_stats/create/`, {
              ...data.combat,
              death_saves: model.id,
            })
          );
        }),
        mergeMap(
          ([
            treasure,
            details,
            ability_scores,
            skills,
            saving_throws,
            combat,
          ]) => {
            const ids = {
              treasure: treasure.id,
              details: details.id,
              ability_scores: ability_scores.id,
              skills: skills.id,
              saving_throws: saving_throws.id,
              combat: combat.id,
            };
            const character = {
              ...data,
              ...ids,
            } satisfies WithoutId<Character>;

            return this.http.post<Model>(
              `${this.apiUrl}/character/create/`,
              character
            );
          }
        ),
        map((model) => model.id)
      );
  }
}
