import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
      let user = sessionStorage.getItem("user");
      console.log(user);
      
    if (!user) {
      this.router.navigateByUrl('/')
      return false;
    }
    return true;
  }
}