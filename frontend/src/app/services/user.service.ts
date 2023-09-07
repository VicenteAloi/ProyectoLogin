import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  signIn(user: user): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

  login(user: user): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
  }
}
