import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { notificationsMock } from 'src/app/utils/mocks';
import { Notification } from '../models/notification';
import { delay } from 'rxjs/operators';
import { User } from '../models/user';

const url = 'http://localhost:8085/api/v1/notification';

@Injectable()
export class NotificationService {
    constructor(private httpClient: HttpClient) { }

    public findByUserId(userId: number): Observable<Notification[]> {
        return this.httpClient.get<Notification[]>(`${url}/getById/${userId}`);
        //return of(notificationsMock);
    }

    public createNotification(notification: Notification): Observable<Notification> {
        return this.httpClient.post<Notification>(`${url}/create`, notification);
    }

    public updateNotification(notification: Notification): Observable<Notification> {
        // return this.httpClient.put<Notification>(`${url}/`, notification);
        return of(notificationsMock[0]).pipe(delay(2000))
    }
}
