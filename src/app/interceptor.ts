import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

  constructor(public tokenStorageService: TokenStorageService,
    public router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.interceptMadoka(request, next);
  }

  private interceptMadoka(request: HttpRequest<any>, next: HttpHandler) {
    let authReq = request;
    if (this.tokenStorageService.getToken() != null) {
      authReq = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, this.tokenStorageService.getToken()
        )
      });
    }

    return next.handle(authReq).pipe(catchError(err => {
      if (err.status === 401) {
        this.tokenStorageService.signOut();
        this.router.navigate(['/auth/login']);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
