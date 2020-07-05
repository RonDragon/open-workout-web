import { ApiService } from './services/api.service';
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
  user;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    this.authService.authState.subscribe(
      (user) => {
        console.log(user);
        this.userService.setLoggedUser(user);
        if(user){
          this.api.getUserWorkoutData(user).subscribe(
            (data) => {
              if (data.rc === 0) {
                this.userService.userDataSubject.next(data);
                console.log(data);
              }
            },
            (error) => {
              console.error(error);
            }
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }
}
