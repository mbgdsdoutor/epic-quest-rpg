export interface Note {
  id?: number,
  title: string,
  content: string,
  userId: number,
  sharedUsersIds?: number[]
}