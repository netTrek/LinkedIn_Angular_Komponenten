import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'in-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  @Input()
  username: string;

  constructor() { }

  ngOnInit() {
  }

}
