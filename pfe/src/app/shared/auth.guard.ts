import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService , private router :Router ){}

  canActivate(){
    if(this.userService.IsLoggedIn()){
      return true;
    }else{
      this.router.navigate(["/login"])
      return false;
    }
  }
  
}
