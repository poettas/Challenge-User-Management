import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from 'src/app/interface/response';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  response: Response;
  //use the activated route to get the actual id of the user
  constructor(
    private activatedRoute: ActivatedRoute,
    private userServie: UserService
  ) {}

  ngOnInit(): void {
    //reacts based on the given parameters
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(+params.get('id')!);

      this.userServie
        .getOneUser(+params.get('id')!)
        .subscribe((response: any) => {
          console.log(response.users[0].image);
          this.response = response;
        });
    });
  }
}
