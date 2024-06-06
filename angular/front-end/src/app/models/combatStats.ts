import { FK, Model, DeathSaves } from '.';

export interface CombatStats extends Model {
  armor_class: number;
  initiative: number;
  speed: number;
  hit_points: number;
  hit_dice: string;
  death_saves: FK<DeathSaves>;
}
