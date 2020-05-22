import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RouterGourdService implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): any {
    if(this.userService.user){
      return true;
    }else{
    this.userService.loggedUserSubject.subscribe(
      (user) => {
        console.log(user)
        if (user != null) {
          this.userService.loggedInSubject.next(true);
          return true;
        } else {
          this.userService.loggedInSubject.next(false);
          this.router.navigate(['login']);
          return false;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  }
}
