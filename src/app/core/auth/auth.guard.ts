import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
// import your AuthService when ready
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private auth: AuthService, private router: Router) {}
  constructor(private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean|UrlTree {
    // TODO: replace with real auth check
    const isLoggedIn = false; // this.auth.isAuthenticated();
    if (isLoggedIn) {
      return true;
    } else {
      // redirect to login if not authenticated
      return this.router.createUrlTree(['/login']);
    }
  }
}
