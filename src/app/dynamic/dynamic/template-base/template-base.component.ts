import { Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { AddressDirective } from '../../address.directive';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit {

  myContext = { $implicit: 'Deutschland', name: 'Saban Ünlü' };

  @ContentChild ( AddressDirective, { static: true, read: TemplateRef } )
  myTemp: TemplateRef<any>;

  @ViewChild ( TemplateRef, { static: true, read: ViewContainerRef } )
  private viewContainerRef: ViewContainerRef;

  constructor ( /*private viewContainerRef: ViewContainerRef*/ ) {
  }

  ngOnInit () {
    this.viewContainerRef.createEmbeddedView ( this.myTemp, this.myContext );
    const viewRef: ViewRef = this.myTemp.createEmbeddedView ( {
      $implicit: 'USA', name: 'Peter Müller'
    } );
    this.viewContainerRef.insert ( viewRef );
  }

}
