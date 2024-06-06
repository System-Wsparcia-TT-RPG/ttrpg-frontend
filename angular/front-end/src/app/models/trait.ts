import { Model } from '.';

export interface Trait extends Model {
  name: string;
  description: string;
  source: string;
}
