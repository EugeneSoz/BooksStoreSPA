import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { StoreModule } from './components/store/store.module';

import localeRu from "@angular/common/locales/ru";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu, "ru");

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AdminModule,
        StoreModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
