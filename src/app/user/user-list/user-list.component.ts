import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserListSubHeaderComponent } from './user-list-sub-header/user-list-sub-header.component';
import { UserListInfoComponent } from './user-list-info/user-list-info.component';

@Component ( {
  selector     : 'in-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  @ContentChild (UserListInfoComponent, {static: false})
  userListInfo: UserListInfoComponent;

  @ContentChild (UserListSubHeaderComponent, {static: true})
  userListSubHeader: UserListSubHeaderComponent;

  @ContentChild (UserListHeaderComponent, {static: true})
  userListHeader: UserListHeaderComponent;

  @ContentChild (UserListHeaderComponent, {static: true, read: ElementRef})
  userListHeaderRef: ElementRef;

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
    console.log ( this.userListHeader, this.userListSubHeader, this.userListHeaderRef.nativeElement );
  }

  onSelectedUsr ( selectedUsr: User ) {
    this.selectedUsr = selectedUsr;
    this.selectUsr.emit ( this.selectedUsr );
  }

  ngAfterContentInit (): void {
    console.log ( this.userListInfo );
  }

}
