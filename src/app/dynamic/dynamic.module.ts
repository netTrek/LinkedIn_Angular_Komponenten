import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TemplateBaseComponent } from './dynamic/template-base/template-base.component';
import { AddressDirective } from './address.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicComponent, TemplateBaseComponent, AddressDirective],
  exports: [DynamicComponent]
})
export class DynamicModule { }
