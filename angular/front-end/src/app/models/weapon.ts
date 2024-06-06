import { DamageDice, FK, Model } from '.';

export interface Weapon extends Model {
  readonly id: number;
  name: string;
  weight: number;
  description: string;
  attack_bonus: number;
  damage_bonus: number;
  damage_type: string;
  properties: Array<string>;
  source: string;
  damage_dice: FK<DamageDice>;
}
