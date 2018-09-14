import { Component, OnInit } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'in-component-base',
  templateUrl: './component-base.component.html',
  styleUrls: ['./component-base.component.scss']
})
export class ComponentBaseComponent implements OnInit {
  comp: Type<any> = AComponent;

  constructor() { }

  ngOnInit() {
  }

  toggle () {
    if ( this.comp === AComponent ) {
      this.comp = BComponent;
    } else {
      this.comp = AComponent;
    }
  }

}
