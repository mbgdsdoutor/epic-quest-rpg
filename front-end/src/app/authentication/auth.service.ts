import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';

const url = 'https://madoka/v1';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  // authenticate(credentials: any): Observable<any> {
  //   const ret = {
  //     userName: credentials.userName,
  //     password: credentials.password,
  //   };

  //   const headers = new HttpHeaders(
  //     {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: '*/*',
  //     }
  //   );

  //   const body = new HttpParams({ fromObject: ret });
  //   const options = { headers };
  //   return this.http.post(`${url}`, body.toString(), options);
  // }

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
