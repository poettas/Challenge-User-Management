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
      this.users = result.users;
    });
  }
}
