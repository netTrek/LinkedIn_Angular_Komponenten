import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TemplateBaseComponent } from './dynamic/template-base/template-base.component';
import { AddressDirective } from './address.directive';
import { ComponentBaseComponent } from './dynamic/component-base/component-base.component';
import { AComponent } from './dynamic/component-base/a/a.component';
import { BComponent } from './dynamic/component-base/b/b.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicComponent, TemplateBaseComponent, AddressDirective, ComponentBaseComponent, AComponent, BComponent],
  exports: [DynamicComponent],
  entryComponents: [AComponent, BComponent]
})
export class DynamicModule { }
