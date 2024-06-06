import { Model } from '.';

export interface Feature extends Model {
  name: string;
  description: string;
  source: string;
}
