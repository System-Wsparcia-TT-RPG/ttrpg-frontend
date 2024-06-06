import { Components, FK, Model } from '.';

export interface Spell extends Model {
  name: string;
  tags: Array<string>;
  type: string;
  ritual: boolean;
  level: string;
  school: string;
  casting_time: string;
  range: string;
  duration: string;
  description: string;
  classes?: Array<string> | null;
  higher_levels?: string | null;
  components: FK<Components>;
}
