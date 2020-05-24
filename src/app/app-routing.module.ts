import { CreateWorkoutComponent } from './components/workout/create-workout/create-workout.component';
import { RouterGourdService } from './services/router-gourd.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { UpdateWorkoutComponent } from './components/workout/update-workout/update-workout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'workout',
    component: WorkoutComponent,
    canActivate: [RouterGourdService],
    children: [
      { path: 'createWorkout', component: CreateWorkoutComponent },
      { path: 'updateWorkout', component: UpdateWorkoutComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: ' ', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
