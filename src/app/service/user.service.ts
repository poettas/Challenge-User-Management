import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly urlApi: string = 'https://dummyjson.com/users';

  constructor() {}
}
