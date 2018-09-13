import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild ( UserListComponent )
  userList: UserListComponent;

  @ViewChild ( UserListComponent, { read: ElementRef } )
  userListRef: ElementRef;

  @ViewChild ( 'helloWorld' )
  paragraphElementRef: ElementRef<HTMLParagraphElement;

  private selectionSub: Subscription;

  constructor ( private renderer: Renderer2 ) {
  }

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    this.selectionSub = this.userList.selectUsr.subscribe (
      next => console.log ( 'selected', next )
    );

    console.log ( this.paragraphElementRef );

    this.renderer.setStyle ( this.paragraphElementRef.nativeElement, 'color', 'red' );
  }

  ngOnDestroy (): void {
    this.selectionSub.unsubscribe ();
  }
}
