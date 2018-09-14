import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';
import { ChangeService } from '../../change.service';

@Component({
  selector: 'in-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  count: number;
  private sub: Subscription;

  constructor ( private cs: ChangeService, private cdr: ChangeDetectorRef ) {
  }

  ngOnInit () {
    this.sub = this.cs.count$.subscribe ( next => {
        this.count = next;
        if ( this.count === 3 ) {
          this.cdr.detach();
        }
        if ( this.count === 5 ) {
          this.cdr.reattach();
        }
      } );
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe ();
  }
}
