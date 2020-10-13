export interface User {
  id: number,
  name: string,
  email: string,
  photoUrl: string,
  description: string,
  friendList?: User[]
}