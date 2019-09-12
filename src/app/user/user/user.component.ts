import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'in-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild ( UserListComponent, { static: false } )
  userList: UserListComponent;

  @ViewChild ( UserListComponent, { static: true, read: ElementRef } )
  userListRef: ElementRef;

  @ViewChild ( 'helloWorld', { static: true } )
  paragraphElementRef: ElementRef<HTMLParagraphElement>;

  private selectionSub: Subscription;

  constructor ( private elemRef: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit () { // { static: true }
    // console.log ( this.userList );
    // console.log ( this.userList.selectUsr );
    // console.log ( this.userListRef );
    // this.renderer.setStyle( this.userListRef.nativeElement, 'color', 'red' );
    console.log ( this.paragraphElementRef );
    this.paragraphElementRef.nativeElement.innerHTML = 'hello world';
  }

  ngAfterViewInit (): void { // { static: false }
    this.selectionSub = this.userList.selectUsr
                            .subscribe ( next => console.log ( 'selected', next ) );
    // console.log ( this.elemRef );
    // this.renderer.setStyle( this.elemRef.nativeElement, 'color', 'red' );
  }

  ngOnDestroy (): void {
    this.selectionSub.unsubscribe ();
  }

}
