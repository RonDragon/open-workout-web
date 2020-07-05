import { Validators } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WorkoutService {
  createWorkoutForm = new FormGroup({
    workoutType: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),

  });

  constructor() {}

  getCreateWorkoutForm() {
    return this.createWorkoutForm;
  }
}
