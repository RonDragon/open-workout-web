import { Component, OnInit } from "@angular/core";
import { AuthService } from "angularx-social-login";
import { UserService } from "./services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.authState.subscribe(
      (user) => {
        console.log(user);
        this.userService.setLoggedUser(user);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
