export interface Note {
  id?: number,
  adventureId: number,
  title: string,
  content: string,
  userId: number,
  sharedUsersIds?: number[]
}