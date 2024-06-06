import {
  FK,
  Many,
  Model,
  AbilityScores,
  Background,
  Class,
  CombatStats,
  Details,
  Equipment,
  Feat,
  Player,
  Race,
  SavingThrows,
  Skills,
  Spell,
  Treasure,
  Weapon,
} from '.';

export interface Character extends Model {
  nickname: string;
  xp: number;
  weapon_proficiencies: Array<string>;
  armor_proficiencies: Array<string>;
  tool_proficiencies: Array<string>;
  player: FK<Player>;
  race: FK<Race>;
  background: FK<Background>;
  details: FK<Details>;
  treasure: FK<Treasure>;
  ability_scores: FK<AbilityScores>;
  skills: FK<Skills>;
  saving_throws: FK<SavingThrows>;
  combat: FK<CombatStats>;
  classes: Many<Class>;
  feats: Many<Feat>;
  spells: Many<Spell>;
  weapons: Many<Weapon>;
  equipment: Many<Equipment>;
}
