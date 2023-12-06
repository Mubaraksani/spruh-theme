import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private authService: AuthService, 
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // if (this.authService.currentUserValue) {
    //   const userRole = this.authService.currentUserValue;
    //   // if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
    //   //   this.router.navigate(["/auth/login"]);
    //   //   return false;
    //   // }
    //   if (userRole) {
    //     return true;
    //   }
    // }
    if (localStorage.getItem('currentAgentUser')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login']);
    return false;
  }
  
}
