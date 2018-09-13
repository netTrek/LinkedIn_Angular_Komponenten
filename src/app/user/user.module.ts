import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserListHeaderComponent } from './user-list/user-list-header/user-list-header.component';
import { UserListSubHeaderComponent } from './user-list/user-list-sub-header/user-list-sub-header.component';
import { UserListInfoComponent } from './user-list/user-list-info/user-list-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserNameComponent, UserListHeaderComponent, UserListSubHeaderComponent, UserListInfoComponent],
  exports: [UserComponent]
})
export class UserModule { }
