import { Model } from '.';

export interface User extends Model {
  password: string;
  last_login?: string | null;
  is_superuser?: boolean;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: boolean;
  is_active?: boolean;
  date_joined?: string;
  groups?: Array<number>;
  user_permissions?: Array<number>;
}
