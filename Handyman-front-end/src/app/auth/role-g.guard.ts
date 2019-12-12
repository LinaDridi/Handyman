import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGGuard implements CanActivate  {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles = this.tokenStorage.getAuthorities();
    console.log("test", roles)
    console.log(route.data.roles)
    if (roles[0] === route.data.roles[0]) { return true; }
    return false;
  }

}
