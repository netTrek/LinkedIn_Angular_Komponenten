import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';

@Component({
  selector: 'in-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeComponent implements OnInit, OnDestroy {

  count: number;
  private sub: Subscription;

  constructor ( private cdr: ChangeDetectorRef ) {
  }

  ngOnInit () {
    this.sub = interval ( 500 )
      .pipe (
        take ( 8 )
      )
      .subscribe ( next => {
        // console.log ( next );
        this.count = next;
        this.cdr.detectChanges();
      } );
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }
}
