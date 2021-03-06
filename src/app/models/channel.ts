import {User} from './user';
import {Message} from './message';

export interface Channel {
  id: number;
  name: string;
  logo: string;
  users: User[];
  messages: Message[];
}
