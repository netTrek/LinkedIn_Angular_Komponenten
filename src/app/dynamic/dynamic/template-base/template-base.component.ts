import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AddressDirective } from '../../address.directive';

@Component ( {
  selector   : 'in-template-base',
  templateUrl: './template-base.component.html',
  styleUrls  : [ './template-base.component.scss' ]
} )
export class TemplateBaseComponent implements OnInit, AfterViewInit {

  @ContentChild ( AddressDirective, {read: TemplateRef} )
  myTemp: TemplateRef<any>;

  @ViewChild ( TemplateRef, {read: ViewContainerRef } )
  viewContainerRef: ViewContainerRef

  myContext = { $implicit: 'Deutschland', name: 'Peter Mülller' };

  constructor (  ) {
  }

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    this.viewContainerRef.createEmbeddedView( this.myTemp, this.myContext );
  }

}
