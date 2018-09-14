import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit {

  myContext = { $implicit: 'Hello World!', name: 'Saban Ünlü' };

  constructor () {
  }

  ngOnInit () {
  }

}
