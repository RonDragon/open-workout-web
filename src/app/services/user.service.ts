import { Injectable } from "@angular/core";
import { SocialUser } from "angularx-social-login";
import { ApiService } from "./api.service";
import { Subject, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(null);
  loggedUserSubject: BehaviorSubject<SocialUser> = new BehaviorSubject(null);
  userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  user;
  constructor(private api: ApiService, private router: Router) {}

  setLoggedUser(user) {
    this.user = user;
    this.loggedUserSubject.next(user)
    if(user){
      this.loggedInSubject.next(true);
      this.router.navigate(['workout']);
    }else{
      this.loggedInSubject.next(false);
      this.router.navigate(['login']);



    }

  }

}
