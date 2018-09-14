import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';

@Component({
  selector: 'in-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  count: number;
  private sub: Subscription;

  constructor () {
  }

  ngOnInit () {
    this.sub = interval ( 500 )
      .pipe (
        take ( 8 )
      )
      .subscribe ( next => {
        // console.log ( next );
        this.count = next;
      } );
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }
}
