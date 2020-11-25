import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Note } from '../components/notes/note';
import { notesMock } from 'src/app/utils/mocks';

const url = 'http://localhost:8085/api/v1/notes';

@Injectable()
export class NotesService {
  constructor(private httpClient: HttpClient) { }

  public findByUserId(userId: number): Observable<Note[]> {
    // return this.httpClient.get<Note[]>(`${url}/${userId}`);
    return of(notesMock);
  }

  public saveNote(note: Note): Observable<Note> {
    if (note.id) {
      return this.httpClient.put<Note>(`${url}/`, note);
    } else {
      return this.httpClient.post<Note>(`${url}/`, note);
    }
  }

  public removeNote(noteId: number): Observable<null> {
    return this.httpClient.delete<null>(`${url}/${noteId}`);
  }
}
