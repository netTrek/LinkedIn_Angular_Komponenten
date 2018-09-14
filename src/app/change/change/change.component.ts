import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';
import { ChangeService } from '../change.service';

@Component({
  selector: 'in-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeComponent implements OnInit, OnDestroy {

  count: number;
  private sub: Subscription;

  constructor ( public cs: ChangeService ) {
  }

  ngOnInit () {
    this.sub = this.cs.count$.subscribe ( next => {
        this.count = next;
      } );
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }
}
