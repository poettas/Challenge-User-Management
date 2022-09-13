import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from '../interface/response';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<Response> {
  constructor(private userService: UserService) {}

  // underscore the state out, to tell the compiler, that i am aware, that it is there, but i am not using it
  // to resolve and prepare only the data for the details page to clear out the undefined error
  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<Response> {
    return this.userService.getOneUser(route.paramMap.get('id'));
  }
}
