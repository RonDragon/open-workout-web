import { OnDestroy } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider,
  AuthService,
} from "angularx-social-login";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        this.loggedIn = user != null;
        this.userService.loggedUserSubject.next(user);
        console.log(this.user);
        if (this.user != null) {
          this.userService.loggedInSubject.next(true);
        } else {
          this.userService.loggedInSubject.next(false);
          this.router.navigate(["login"]);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.user === null) {
      console.log("unsub");
      this.authSubscription.unsubscribe();
    }
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
