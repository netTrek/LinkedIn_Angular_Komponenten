import { Component, OnInit } from '@angular/core';
import { UserNameComponent } from '../user-name/user-name.component';
import { UserListService } from '../user-list/user-list.service';

@Component ( {
  selector   : 'in-user-name-derivative',
  templateUrl: './user-name-derivative.component.html',
  styleUrls  : [
    '../user-name/user-name.component.scss',
    './user-name-derivative.component.scss'
  ]
} )
export class UserNameDerivativeComponent extends UserNameComponent {

  constructor ( private userList: UserListService ) {
    super ();
    console.log ( userList.myServiceValue );
  }

  selectUser () {
    super.selectUser ();
    this.userList.myServiceValue = this.user.name;
  }
}
