import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { UserListService } from './user-list.service';

@Component ( {
  selector   : 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ],
  providers  : [ UserListService ]
} )
export class UserListComponent implements OnInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  users: User[] = [
    { name: 'Frank Müller', age: 12 },
    { name: 'Hans Müller', age: 13 },
    { name: 'Peter Müller', age: 14 }
  ];

  selectedUsr: User;

  constructor ( public userList: UserListService ) {
    console.log ( userList.myServiceValue );
  }

  ngOnInit () {
  }

  onSelectedUsr ( selectedUsr: User ) {
    this.selectedUsr = selectedUsr;
    this.selectUsr.emit ( this.selectedUsr );
  }

}
