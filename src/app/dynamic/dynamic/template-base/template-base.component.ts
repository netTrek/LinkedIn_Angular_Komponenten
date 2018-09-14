import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { AddressDirective } from '../../address.directive';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit {

  @ContentChild ( AddressDirective, {read: TemplateRef} )
  myTemp: TemplateRef<HTMLElement>;

  myContext = { $implicit: 'Deutschland', name: 'Peter Mülller' };

  constructor () {
  }

  ngOnInit () {
  }

}
