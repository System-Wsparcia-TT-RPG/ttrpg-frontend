import { Model } from '.';

export interface Feat extends Model {
  name: string;
  description: string;
  source: string;
}
