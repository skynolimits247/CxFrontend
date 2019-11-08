import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'user',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
