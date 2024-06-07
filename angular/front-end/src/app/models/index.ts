declare const __type: unique symbol;

type Tag<A> = { [__type]: A };
export type Many<A> = number[] | Tag<A[]>;
export type FK<A> = number | Tag<A>;

export type Full1<T extends Model> = {
  [K in keyof T]: T[K] extends Many<infer A extends Model>
    ? Tag<A[]> extends T[K]
      ? A[]
      : T[K]
    : T[K] extends FK<infer A extends Model>
    ? Tag<A> extends T[K]
      ? A
      : T[K]
    : T[K];
};

export type Full<T extends Model> = {
  [K in keyof T]: T[K] extends Many<infer A extends Model>
    ? Tag<A[]> extends T[K]
      ? Full<A>[]
      : T[K]
    : T[K] extends FK<infer A extends Model>
    ? Tag<A> extends T[K]
      ? Full<A>
      : T[K]
    : T[K];
};

export interface Model {
  readonly id: number;
}

export * from './abilityScores';
export * from './action';
export * from './background';
export * from './character';
export * from './class';
export * from './combatStats';
export * from './components';
export * from './damageDice';
export * from './deathSaves';
export * from './details';
export * from './equipment';
export * from './feat';
export * from './feature';
export * from './player';
export * from './race';
export * from './savingThrows';
export * from './senses';
export * from './skills';
export * from './spell';
export * from './trait';
export * from './treasure';
export * from './user';
export * from './weapon';
