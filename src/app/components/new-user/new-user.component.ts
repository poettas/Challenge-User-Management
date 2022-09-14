import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  createUser() {
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Muhammad',
        lastName: 'Ovi',
        username: 'Mu',
        birthDate: '15.12.1850',
        email: 'm.ovi@test.com',
        password: '******',
        gender: 'male',
        image: 'https://robohash.org/ovi',
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  // createUser() {
  //   this.userService.createUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Done creating new User')
  //   );
  // }
}
