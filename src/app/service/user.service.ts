import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly urlApi: string = 'https://dummyjson.com/users';

  //using httpClient
  constructor(private http: HttpClient) {}

  // fetch all users from api
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}`);
  }

  // fetch single user details
  getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/:${id}`);
  }

  // edit single user details

  // delete a user from the api
}
