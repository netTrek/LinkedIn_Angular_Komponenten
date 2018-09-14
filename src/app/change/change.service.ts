import { Injectable } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  count$ = interval( 5000 ).pipe( take( 8 ));

  constructor() { }
}
