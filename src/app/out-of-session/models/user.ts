export interface User {
  id: number;
  userName: string;
  fullName?: string;
  email: string;
  photoUrl?: string;
  description: string;
  password?: string;
  confirmPassword?: string;
  friendList?: User[];
}
