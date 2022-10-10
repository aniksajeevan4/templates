import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceNameService } from './api.sevice';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(private router:Router,private service:ServiceNameService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.isLoggedIn==true){
          return true;
      }
      this.router.navigateByUrl('login')

    return true;
  }
  
}
