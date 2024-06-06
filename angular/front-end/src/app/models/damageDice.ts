import { Model } from '.';

export type Sides = 4 | 6 | 8 | 10 | 12 | 20;

export interface DamageDice extends Model {
  count: number;
  sides: Sides;
  mod: number;
}
