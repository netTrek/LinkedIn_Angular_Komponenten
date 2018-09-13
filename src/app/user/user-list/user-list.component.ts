import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {User} from '../user';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  users: User[] = [
    { name: 'Frank Müller', age: 12},
    { name: 'Hans Müller', age: 13},
    { name: 'Peter Müller', age: 14},
    { name: 'Paul Müller', age: 15}
  ];

  selectedUsr: User;

  constructor() { }
  ngOnInit() {  }

  onSelectedUsr ( selectedUsr: User) {
    this.selectedUsr = selectedUsr;
    this.selectUsr.emit( this.selectedUsr );
  }
}
