import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnInit,
  Output, QueryList,
  ViewEncapsulation
} from '@angular/core';
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

  @ContentChild(UserListHeaderComponent, { static: true })
  header: UserListHeaderComponent;

  @ContentChild(UserListHeaderComponent, { static: true,  read: ElementRef })
  headerRef: ElementRef;

  @ContentChild(UserListSubHeaderComponent, { static: true })
  subHeader: UserListSubHeaderComponent;

  @ContentChild(UserListInfoComponent, { static: true })
  info: UserListInfoComponent;

  @ContentChildren ( UserListInfoComponent )
  infos: QueryList<UserListInfoComponent>;

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
    console.log ( this.header,
      this.subHeader,
      this.headerRef.nativeElement,
      this.info,
      this.infos,
      this.infos.toArray()
    );

    this.infos.changes.subscribe(
      next => {
        console.log ( next );
      }
    );

  }

}
