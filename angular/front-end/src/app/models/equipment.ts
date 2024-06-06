import { Model } from '.';

export interface Equipment extends Model {
  name: string;
  weight: number;
  description: string;
  magic: boolean;
  quantity: number;
  source: string;
}
