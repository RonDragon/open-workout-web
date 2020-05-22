import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  userDataSubscription: Subscription;
  userData;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userDataSubject.subscribe(data => {
      this.userData = data;
    })
  }

}
