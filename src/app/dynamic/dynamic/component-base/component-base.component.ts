import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
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

  constructor( private viewContainerRef: ViewContainerRef,
               private cfr: ComponentFactoryResolver ) { }

  ngOnInit() {
    const aFactory: ComponentFactory<AComponent> = this.cfr.resolveComponentFactory( AComponent );
    const compRef: ComponentRef<AComponent> = this.viewContainerRef.createComponent<AComponent>( aFactory );
    compRef.instance.username = 'Saban Ünlü';
  }
/*

  toggle () {
    if ( this.comp === AComponent ) {
      this.comp = BComponent;
    } else {
      this.comp = AComponent;
    }
  }
*/

}
