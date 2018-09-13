import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserListSubHeaderComponent } from './user-list-sub-header/user-list-sub-header.component';

@Component ( {
  selector     : 'in-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserListHeaderComponent )
  header: UserListHeaderComponent;

  @ContentChild ( UserListHeaderComponent, {read: ElementRef} )
  headerRef: ElementRef;

  @ContentChild ( UserListSubHeaderComponent )
  subHeader: UserListSubHeaderComponent;

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

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
    this.selectedUsr = selectedUsr;
    this.selectUsr.emit ( this.selectedUsr );
  }

  ngAfterContentInit (): void {
    console.log ( this.header, this.subHeader, this.headerRef.nativeElement );
  }

}
