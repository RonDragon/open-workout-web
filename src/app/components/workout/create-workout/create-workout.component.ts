import {
  FormGroup,
  AbstractControl,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserData } from './../../../model/workout.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css'],
})
export class CreateWorkoutComponent implements OnInit {
  controlsName = ['workoutType', 'date'];
  form = new FormGroup({
    workoutType: new FormControl('workoutType', [Validators.required]),
    date: new FormControl('date', [Validators.required]),
  });
  constructor(
    private workoutService: WorkoutService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.subUserData();
  }
  subUserData() {
    this.userService.userDataSubject.subscribe((data) => {
      this.setForm(data);
    });
  }
  setForm(userData) {
    console.log(userData);
    userData.workouts.exercises.forEach((ex) => {
      const exControlName = 'exName: ' + ex.exerciseName + 'exNum: ' + ex.exerciseNum;
      this.controlsName.push(exControlName);
      const exNameControl = new FormControl(exControlName, [
        Validators.required,
      ]);
      this.form.addControl('ex' + ex.exerciseNum, exNameControl);

      ex.sets.forEach((set) => {
        const exSetNum =  'setNum: ' + set.setNum;
        const exRepNum =  'repOfsetNum: ' + set.setNum;
        this.controlsName.push(exSetNum, exRepNum);
        const SetsControl = new FormControl(exSetNum, [
          Validators.required,
        ]);
        const RepsControl = new FormControl(exRepNum, [
          Validators.required,
        ]);
        this.form.addControl(exSetNum, SetsControl);
        this.form.addControl(exRepNum, RepsControl);
      });
    });
    console.log(this.form);
  }
  onSubmit(post) {
    console.log(post);
  }
}
