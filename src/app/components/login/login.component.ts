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
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ngOnDestroy(): void {}
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
