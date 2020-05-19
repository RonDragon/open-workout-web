import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedUser: SocialUser;
  userData;
  constructor(private api: ApiService) {}

  setLoggedUser(loggedUser: SocialUser) {
    if (loggedUser) {
      this.loggedUser = loggedUser;
      console.log(this.loggedUser.authToken);
      this.api.getUserWorkoutData(this.loggedUser.authToken).subscribe(
        (data) => {
          if (data.rc === 0) {
            this.userData = data;
            console.log(this.userData)
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  getLoggedUser() {
    if (this.loggedUser) {
      return this.loggedUser;
    } else {
      // navigate
    }
  }
}
