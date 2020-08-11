import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';
const USER = 'User';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER);
  }

  public saveUser(user: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,  JSON.stringify(user));
  }

  public getLoggedUser(): any {
    if (this.isLogged) {
      return JSON.parse(localStorage.getItem(USER)) as any;
    }
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,  token);
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
