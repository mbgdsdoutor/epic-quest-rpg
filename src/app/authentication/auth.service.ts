import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../out-of-session/models/user';
import { TokenStorageService } from '../token-storage.service';
import { Credentials } from './models/credentials';

const url = 'http://localhost:8085/api/v1/auth';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  authenticate(credentials: Credentials): Observable<any> {
    const ret = {
      username: credentials.username,
      password: credentials.password,
    };
    return this.http.post(`${url}/login`, ret);
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${url}/register/`, user);
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
