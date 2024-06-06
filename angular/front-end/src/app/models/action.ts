import { DamageDice, FK, Model } from '.';

export interface Action extends Model {
  name: string;
  description: string;
  source: string;
  damage_bonus: number;
  legendary: boolean;
  reaction: boolean;
  damage_dice: FK<DamageDice>;
}
