import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserprofileModule { }
