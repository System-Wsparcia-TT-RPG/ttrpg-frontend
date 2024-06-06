import { Model } from '.';

export interface Components extends Model {
  verbal: boolean;
  somatic: boolean;
  material: boolean;
  raw: string;
}
