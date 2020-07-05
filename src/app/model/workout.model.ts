import { SocialUser } from "./user.model";


export class UserData {
  constructor(public user: SocialUser, public workouts: Workout[]) {}
}

export class Workout {
  constructor(
    public id: string,
    public workoutType: string,
    public date: string,
    public exercises: Exercise[]
  ) {}
}
export class Exercise {
  constructor(public exerciseNum: number,public exerciseName: string, public sets: Set[]) {}
}

export class Set {
  constructor(public setNum: number, public reps: number,public kg: number) {}
}
