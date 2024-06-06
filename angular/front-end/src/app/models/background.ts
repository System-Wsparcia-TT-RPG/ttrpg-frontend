import { Model } from '.';

export interface Background extends Model {
  name: string;
  option: string;
  description: string;
  source: string;
}
