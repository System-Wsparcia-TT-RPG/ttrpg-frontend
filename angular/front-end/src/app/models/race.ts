import { Action, FK, Many, Model, Senses, Trait } from '.';

export type Size = (typeof Sizes)[keyof typeof Sizes];

export const Sizes = {
  T: 'Tiny',
  S: 'Small',
  M: 'Medium',
  L: 'Large',
  H: 'Huge',
  G: 'Gargantuan',
} as const;

export interface Race extends Model {
  name: string;
  subtype: string;
  size: Size;
  source: string;
  senses: FK<Senses>;
  traits: Many<Trait>;
  actions: Many<Action>;
}
