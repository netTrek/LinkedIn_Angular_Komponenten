import { Injectable } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  count$ = interval( 500 ).pipe( take( 8 ));
  list$ = new BehaviorSubject<number[]>( [1 , 2, 3]);


  constructor() {

    this.count$.subscribe(
      next => {
        const crr = this.list$.getValue();
        crr[2] = next;
        this.list$.next( [...crr] );
      }
    );

  }
}
