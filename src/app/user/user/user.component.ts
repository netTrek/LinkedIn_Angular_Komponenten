import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild ( UserListComponent, { static: false })
  userList: UserListComponent;
  private selectionSub: Subscription;

  constructor () {
  }

  ngOnInit () { // { static: true }
    // console.log ( this.userList );
    // console.log ( this.userList.selectUsr );
  }

  ngAfterViewInit (): void { // { static: false }
    this.selectionSub = this.userList.selectUsr.subscribe( next => console.log ('selected', next ) );
  }

  ngOnDestroy (): void {
    this.selectionSub.unsubscribe();
  }

}
