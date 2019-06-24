import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';

import localeRu from "@angular/common/locales/ru";
import { registerLocaleData } from '@angular/common';
import { DeleteMessageComponent } from './components/modals/delete-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        BrowserAnimationsModule,

        // FormsModule,
        // ReactiveFormsModule,
        // TooltipModule.forRoot(),
        // ModalModule.forRoot(),
        // TypeaheadModule.forRoot(),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru' }
    ],
    entryComponents: [DeleteMessageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
