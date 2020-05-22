import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInSubject: Subject<boolean> = new Subject();
  loggedUserSubject: Subject<SocialUser> = new Subject();
  userDataSubject: Subject<any> = new Subject();
  user;
  constructor(private api: ApiService, private router: Router) {}

  setLoggedUser() {
      this.loggedUserSubject.subscribe(user => {
        if(user){
          this.user = user;
          this.api.getUserWorkoutData(user).subscribe(
            (data) => {
              if (data.rc === 0) {
                this.userDataSubject.next(data);
                console.log(data);
                this.router.navigate(['workout']);
              }
            },
            (error) => {
              console.error(error);
            }
          );
        }
        }

       ) }
    }
