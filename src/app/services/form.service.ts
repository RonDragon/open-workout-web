import { Workout } from "./../model/workout.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor() {}

  // here we gonna create func who get the workout data and create form to update view or ***new*** default form
  getCreateWorkoutForm() {}
  getUpdateWorkOutForm(workout: Workout) {}
}
