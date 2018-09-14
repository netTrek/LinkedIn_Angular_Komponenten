import { Component, ContentChild, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AddressDirective } from '../../address.directive';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit {

  @ContentChild ( AddressDirective, { read: TemplateRef } )
  myTemp: TemplateRef<any>;

  @ViewChild ( TemplateRef, { read: ViewContainerRef } )
  viewContainerRef: ViewContainerRef;

  myContext = { $implicit: 'Deutschland', name: 'Peter Mülller' };

  constructor () {
  }

  ngOnInit () {
    this.viewContainerRef.createEmbeddedView ( this.myTemp, this.myContext );

    const viewRef: EmbeddedViewRef<any> = this.myTemp.createEmbeddedView ( {
      $implicit: 'USA', name: 'Saban Ünlü'
    } );
    this.viewContainerRef.insert ( viewRef );

  }

}
