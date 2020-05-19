import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../components/common/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getUserWorkoutData(token):Observable<any> {
    const url = Constants.apiUrl + Constants.getUserData;
    return this.http.get(url,{params: new HttpParams().set('token', token)});
  }

}
