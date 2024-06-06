import { Model } from '.';

export interface AbilityScores extends Model {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
