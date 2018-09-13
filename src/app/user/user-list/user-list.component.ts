import { AfterViewInit, Component, EventEmitter, OnInit, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserNameComponent } from '../user-name/user-name.component';

@Component ( {
  selector     : 'in-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserListComponent implements OnInit, AfterViewInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  @ViewChildren ( UserNameComponent )
  userNames: QueryList<UserNameComponent>;

  users: User[] = [
    { name: 'Frank Müller', age: 12 },
    { name: 'Hans Müller', age: 13 },
    { name: 'Peter Müller', age: 14 },
    { name: 'Paul Müller', age: 15 }
  ];

  selectedUsr: User;

  constructor () {
  }

  ngOnInit () {
  }

  onSelectedUsr ( selectedUsr: User ) {
    // this.selectedUsr = selectedUsr;
    // this.selectUsr.emit ( this.selectedUsr );
    // this.users.pop();
    this.users.push( {age: 44, name: 'Saban Ünlü'});
  }

  ngAfterViewInit (): void {
    this.userNames.changes.subscribe(
      next => {
        console.log ( next );
      }
    );
  }
}
