import { LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';

import localeEsES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsES, 'es-ES');

import {CopyRight} from "./pipes/copyright.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CopyRight
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
