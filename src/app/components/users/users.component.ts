import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  //defining array to bind the response
  users: User[] = [];

  //using UserService
  constructor(private userservice: UserService) {}

  //generate api call on init
  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((result: any) => {
      console.log(result);
      (error: any) => console.log(error);
      this.users = result.users;
      console.log('users in get: ', this.users);
    });
  }

  deleteUser(id: any): void {
    this.userservice.deleteUser(this.users[0].id).subscribe((result: any) => {
      console.log(result);
      (error: any) => console.log(error);
      () => console.log('Done deleting user');
    });
  }
}
