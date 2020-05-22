import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../components/common/constants';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getUserWorkoutData(user : SocialUser): Observable<any> {
    const url = Constants.apiUrl + Constants.getUserData;
    if(user.facebook){
      return this.http.get(url,
        {params: new HttpParams().set('name', user.facebook.name)
        .set('email',user.facebook.email)
        .set('provider' ,user.provider)
       });
    }else{
      return this.http.get(url,
        {params: new HttpParams().set('name', user.name)
        .set('email',user.email)
        .set('provider' ,user.provider)

       });
    }

  }

  public addUserWorkout(workout): Observable<any> {
    const url = Constants.apiUrl + Constants.addWorkout;
    return this.http.get(url, {params: new HttpParams().set('workout', workout)});
  }

  public updateUserWorkout(workout): Observable<any> {
    const url = Constants.apiUrl + Constants.updateWorkout;
    return this.http.get(url, {params: new HttpParams().set('workout', workout)});
  }

  public deleteUsereWorkout(id): Observable<any> {
    const url = Constants.apiUrl + Constants.deleteWorkout;
    return this.http.get(url, {params: new HttpParams().set('id', id)});
  }
}
