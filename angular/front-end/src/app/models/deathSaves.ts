import { Model } from '.';

export interface DeathSaves extends Model {
  successes: number;
  failures: number;
}
