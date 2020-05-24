import { Injectable } from "@angular/core";
import { SocialUser } from "angularx-social-login";
import { ApiService } from "./api.service";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  loggedInSubject: Subject<boolean> = new Subject();
  loggedUserSubject: Subject<SocialUser> = new Subject();
  userDataSubject: Subject<any> = new Subject();
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
