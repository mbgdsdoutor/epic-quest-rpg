import { Player } from './player';
import { User } from '../../out-of-session/models/user';

export interface Adventure {
  id?: number;
  name: string;
  photoUrl: string;
  description: string;
  mestre: User;
  users: User[];
  players?: Player[];
  isSessionActive?: boolean;
  usersIdActive?: number[];
}
