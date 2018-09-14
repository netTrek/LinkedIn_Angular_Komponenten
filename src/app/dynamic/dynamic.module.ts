import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TemplateBaseComponent } from './dynamic/template-base/template-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicComponent, TemplateBaseComponent],
  exports: [DynamicComponent]
})
export class DynamicModule { }
