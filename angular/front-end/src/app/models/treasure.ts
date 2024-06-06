import { Model } from '.';

export interface Treasure extends Model {
  pp: number;
  gp: number;
  ep: number;
  sp: number;
  cp: number;
}
