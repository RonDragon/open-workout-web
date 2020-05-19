import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkoutComponent } from './components/workout/workout.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'workout', component: WorkoutComponent},
  {path: '', component: LoginComponent , pathMatch: 'full'},
  {path: '**', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
