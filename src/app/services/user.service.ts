import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000';
  public loggedIn: boolean;
  public user: User;

  constructor(private http: HttpClient) {
    this.loggedIn = false;
  }

  login(email: string): Observable<Object> {
    return this.http.post(`${this.url}/login`, { email });
  }

  register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/register`, user);
  }
}
