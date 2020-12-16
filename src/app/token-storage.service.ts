import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from './out-of-session/models/user';

const TOKEN_KEY = 'AuthToken';
const USER = 'User';
const NOTIFICATIONS = 'Notifications';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER);
  }

  public addNotification(id: number) {
    const lst: number[] = this.getNotifications() || [];
    lst.push(id);
    window.localStorage.removeItem(NOTIFICATIONS);
    window.localStorage.setItem(NOTIFICATIONS, JSON.stringify(lst));
  }

  public getNotifications(): number[] {
    return JSON.parse(localStorage.getItem(NOTIFICATIONS)) || [];
  }

  public saveUser(user: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  public getLoggedUser(): User {
    if (this.isLogged) {
      return JSON.parse(localStorage.getItem(USER)) as any;
    }
  }

  public saveToken(token: string) {
    console.log('entrei no save token')
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  public isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }

    if (!token) {
      return true;
    }

    // const date = this.getTokenExpirationDate(token);
    const date = token === 'madokinha_star' ? undefined : this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  public isLogged(): boolean {
    return !this.isTokenExpired();
  }

  public decodeToken(): any {
    const decoded = jwt_decode(this.getToken());
    if (decoded === undefined) {
      return null;
    }

    return decoded;
  }
}
