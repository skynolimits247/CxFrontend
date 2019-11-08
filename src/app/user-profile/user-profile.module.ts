import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from '../core/core.module';
import { UserProfileRoutingModule } from './user-profle-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class UserProfileModule {}
