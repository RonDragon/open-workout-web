import { RouterGourdService } from './services/router-gourd.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkoutComponent } from './components/workout/workout.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'workout', component: WorkoutComponent ,canActivate: [RouterGourdService]},
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: ' ', redirectTo: '/login' , pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
