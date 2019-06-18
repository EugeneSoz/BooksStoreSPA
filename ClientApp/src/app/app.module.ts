import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';

import localeRu from "@angular/common/locales/ru";
import { registerLocaleData } from '@angular/common';
import { DeleteMessageComponent } from './components/modals/delete-message.component';

registerLocaleData(localeRu, "ru");

@NgModule({
    declarations: [
        AppComponent,
        DeleteMessageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        ModalModule.forRoot(),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru' }
    ],
    entryComponents: [DeleteMessageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
