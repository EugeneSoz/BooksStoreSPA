import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { StoreModule } from './components/store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import localeRu from "@angular/common/locales/ru";
import { registerLocaleData } from '@angular/common';
import { DeleteMessageComponent } from './components/modals/delete-message.component';

registerLocaleData(localeRu, "ru");

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AdminModule,
        StoreModule,
        AppRoutingModule,

        ModalModule.forRoot(),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru' }
    ],
    entryComponents: [DeleteMessageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
