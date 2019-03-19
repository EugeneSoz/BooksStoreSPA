import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbServicesComponent } from './components/admin/dbServices.component';
import { AdminComponent } from './components/shared/admin.component';
import { RestDatasource } from './helpers/restDatasource';
import { DataOptionsService } from './services/dataOptions.service';
import { Urls } from './helpers/urls';

@NgModule({
    declarations: [
        AppComponent,
        DbServicesComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        Urls,
        RestDatasource,
        DataOptionsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
