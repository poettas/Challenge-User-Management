import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonMode: 'Save Changes' | 'Edit' = 'Edit';

  //use the activated route to get the actual id of the user
  constructor(
    private activatedRoute: ActivatedRoute,
    private userServie: UserService
  ) {}

  ngOnInit(): void {
    //use the resolver
    this.user = <User>(
      this.activatedRoute.snapshot.data['resolvedResponse'].users[0]
    );
    console.log(this.user);
  }

  //using modes for the edit button
  changeButtonMode(mode?: 'edit' | 'locked'): void {
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonMode = this.buttonMode === 'Edit' ? 'Save Changes' : 'Edit';
    // save the edited values, because a real edit isn't possible with the api
    if (mode === 'edit') {
      console.log('Updating the User Values on the API');

      fetch('https://dummyjson.com/users/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lastName: 'Owais',
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  }

  //doesn't work right now, I have to take a deeper look into CRUD operations in Angular
  // editUser(user: User, id: any) {
  //   if (this.mode === 'edit') {
  //     this.userServie.updateUser(this.user, this.user.id).subscribe(
  //       (response) => console.log(response),
  //       (error: any) => console.log(error),
  //       () => console.log('User has been updated')
  //     );
  //   }
  // }
}
