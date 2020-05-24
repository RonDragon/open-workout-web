import { Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "angularx-social-login";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class RouterGourdService implements CanActivate {
  subs: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    if (this.userService.user) {
      return true;
    } else {
      this.subs = this.userService.loggedUserSubject.subscribe(
        (user) => {
          if (user != null) {
            return true;
          } else {
            this.router.navigate(["login"]);
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
