import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../components/notes/note';

const url = 'http://localhost:8085/api/v1/anotation';

@Injectable()
export class NotesService {
  constructor(private httpClient: HttpClient) { }

  public findByUserId(userId: number): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${url}/getByUserId/${userId}`);
  }

  public saveNote(note: Note): Observable<Note> {
    if (note.id) {
      const obj = {...note, adventureId: {id: note.adventureId}, sharedUsersId: note.sharedUsersIds || []}
      return this.httpClient.put<Note>(`${url}/update`, note);
    } else {
      const obj = {...note, adventureId: {id: note.adventureId}, sharedUsersId: note.sharedUsersIds || []}
      return this.httpClient.post<Note>(`${url}/create`, obj);
    }
  }

  public removeNote(noteId: number): Observable<null> {
    return this.httpClient.delete<null>(`${url}/delete/${noteId}`);
  }
}
