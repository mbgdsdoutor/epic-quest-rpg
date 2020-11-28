import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/out-of-session/models/user';
import { usersMock } from 'src/app/utils/mocks';

const url = 'http://localhost:8085/api/v1/user';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }

    public findById(userId: number): Observable<User> {
        return this.httpClient.get<User>(`${url}/getById/${userId}`);
        // const user = usersMock.filter(u => u.id === userId)[0];
        // return of({ ...user, friendList: usersMock });
    }
    public findAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${url}/getAll/`);
        // return of(usersMock);
    }

    public addFriend(user: User): Observable<void> {
        return this.httpClient.post<void>(`${url}/addFriend/`, user);
    }
}
