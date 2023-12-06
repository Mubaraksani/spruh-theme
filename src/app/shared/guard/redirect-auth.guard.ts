import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Role } from '../modals/role';

@Injectable({
  providedIn: 'root'
})
export class RedirectAuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthService
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean | UrlTree {
    const user = this.authService.currentAgentUserValue;
    if (user) {
      if (user['user_type'] == Role.superAdmin || user['user_type'] == Role.subAdmin) {
        this.router.navigate(['/admin']);
      }
      return true;
    }
    console.log(user)
    this.router.navigate(['/auth/login']);
    return false;
  }
  
}
