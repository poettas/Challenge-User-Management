import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from '../interface/response';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly urlApi: string = 'https://dummyjson.com/users';

  //using httpClient
  constructor(private http: HttpClient) {}

  // fetch all users from api
  getAllUsers(): Observable<any> {
    return this.http
      .get<any>(`${this.urlApi}`)
      .pipe(map((response) => this.generateResponse(response)));
  }

  // fetch single user details
  // changed id to any, because resolver didn't want to convert the id to type number
  getOneUser(id: any): Observable<any> {
    return this.http
      .get<any>(`${this.urlApi}/?id=${id}`)
      .pipe(map((response) => this.generateResponse(response)));
  }

  // shrink down api data to the needed/wanted
  private generateResponse(response: Response): Response {
    return {
      users: response.users.map(
        (user: any) =>
          <User>{
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            username: user.username,
            birthDate: user.birthDate,
            image: user.image,
            domain: user.domain,
            address: `${user.address.address}, ${user.address.postalCode} ${user.address.city}  ${user.address.state}`,
            coordinates: {
              lat: user.address.coordinates.lat,
              lng: user.address.coordinates.lng,
            },
          }
      ),
    };
  }

  // create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/newUser`, user);
  }

  // edit single user details
  // choosing put, because the hole form data is going to be sent to the api
  updateUser(id: any, user: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/?id=${id}`, user);
  }

  // delete a user from the api
  deleteUser(id: any): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/?id=${id}`);
  }
}
