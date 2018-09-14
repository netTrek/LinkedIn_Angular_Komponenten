import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeComponent } from './change/change.component';
import { DefaultComponent } from './change/default/default.component';
import { PushComponent } from './change/push/push.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChangeComponent, DefaultComponent, PushComponent],
  exports: [ChangeComponent]
})
export class ChangeModule { }
