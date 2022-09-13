import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UsersComponent } from './components/users/users.component';
import { UserResolver } from './service/user.resolver';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  // only when the code is "resolved" angular will navigate to this route
  {
    path: `userdetail/:id`,
    component: UserdetailComponent,
    resolve: { resolvedResponse: UserResolver },
  },
  { path: 'newUser', component: NewUserComponent },
  // to catch and redirect the 404
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
