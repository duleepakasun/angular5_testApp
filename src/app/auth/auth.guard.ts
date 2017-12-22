import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {OauthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public auth: OauthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.auth.redirectUrl = state.url;

      // console.log(state.url);
      if (this.auth.isAuthenticated()) {
        return true;
      }

      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
