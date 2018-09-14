import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { DynamicModule } from './dynamic/dynamic.module';
import { ChangeModule } from './change/change.module';
registerLocaleData( localeDe, 'de' );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    DynamicModule,
    ChangeModule
  ],
  providers   : [
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
