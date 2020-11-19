import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';
import { Credentials } from './models/credentials';

const url = 'http://localhost:8085/api/v1/login';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  authenticatea(credentials: Credentials): Observable<any> {
    const ret = {
      username: credentials.username,
      password: credentials.password,
    };

    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Accept: '*/*',
    //   }
    // );

    // const body = new HttpParams({ fromObject: ret });
    // const options = { headers };
    return this.http.post(`${url}`, ret);
  }

  authenticate(credentials: any): Observable<any> {
    return of({
      access_token: 'madokinha_star'
    });
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
