import { Many, Model, Feature } from '.';

export interface Class extends Model {
  name: string;
  subtype: string;
  level: number;
  hit_die: number;
  spell_casting: string;
  source: string;
  features: Many<Feature>;
}
