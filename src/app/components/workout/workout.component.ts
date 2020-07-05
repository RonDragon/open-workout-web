import { Router } from '@angular/router';
import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-workout",
  templateUrl: "./workout.component.html",
  styleUrls: ["./workout.component.css"],
})
export class WorkoutComponent implements OnInit {
  constructor(private userService: UserService, private api: ApiService, private router: Router) {}

  ngOnInit() {


  }


  navigateTo(event){
    this.router.navigate(['workout/' +event.value]);

  }
}
