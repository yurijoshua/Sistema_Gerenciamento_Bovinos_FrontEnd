import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router) {}
 
  canActivate(
    aroute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const token = window.localStorage.getItem('token');
      if(token) {
          return true;
      }
      else {
          this.router.navigate(['login']);
          return false;
      }
  }
  
  canDeactivate(
    aroute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): void{
      const token = window.localStorage.removeItem('token');
  }

}
