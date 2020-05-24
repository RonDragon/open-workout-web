import { Router } from '@angular/router';
import { UserService } from "src/app/services/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService, SocialUser } from "angularx-social-login";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedInSubscription: Subscription;
  loggedUserSubscription: Subscription;
  icon: string;

  loggedIn: boolean = false;
  loggedUser: SocialUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
    this.loggedUserSubscription.unsubscribe();
  }

  ngOnInit() {
    this.loggedInSubscription = this.userService.loggedInSubject.subscribe(
      (loggedIn) => [(this.loggedIn = loggedIn)]
    );
    this.loggedUserSubscription = this.userService.loggedUserSubject.subscribe(
      (loggedUser) => {
        if (loggedUser) {
          this.loggedUser = loggedUser;
          if (loggedUser.provider === "FACEBOOK") {
            this.icon = " ../../../assets/icons/facebook.png";
          } else if (loggedUser.provider === "GOOGLE") {
            this.icon = " ../../../assets/icons/google.png";
          }
        }
      }
    );
  }
  signOut() {
    this.authService.signOut();

  }
}
