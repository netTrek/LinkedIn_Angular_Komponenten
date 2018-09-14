import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor ( private cs: ChangeService) {
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
