import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'in-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit {

  @Input()
  list: number[];

  constructor ( private cdr: ChangeDetectorRef ) {
  }

  ngOnInit () {
  }
}
