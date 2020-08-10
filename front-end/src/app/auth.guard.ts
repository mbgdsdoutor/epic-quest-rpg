import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  permissoesId: number[] = [];

  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
  ) {  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tokenService.isTokenExpired()) {
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      return true;
    }
  }
}
