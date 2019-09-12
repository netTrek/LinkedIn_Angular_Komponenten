import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { AddressDirective } from '../../address.directive';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit {

  myContext = { $implicit: 'Deutschland', name: 'Saban Ünlü' };

  @ContentChild ( AddressDirective, { static: false, read: TemplateRef } )
  myTemp: TemplateRef<HTMLElement>;

  constructor () {
  }

  ngOnInit () {
  }

}
