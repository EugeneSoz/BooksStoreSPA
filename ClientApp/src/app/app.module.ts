import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbServicesComponent } from './components/admin/dbServices.component';
import { StoreSidebarComponent } from './components/store/store-sidebar.component';
import { MainComponent } from './components/store/main.component';
import { ActionsComponent } from './components/store/toolbar/actions.component';
import { CartSummaryComponent } from './components/store/toolbar/cart-summary.component';
import { SearchToolbarComponent } from './components/store/toolbar/search-toolbar.component';
import { BooksGridComponent } from './components/store/book/books-grid.component';
import { BookDetailsComponent } from './components/store/book/book-details.component';
import { BookCardComponent } from './components/store/book/book-card.component';
import { MainToolbarComponent } from './components/store/toolbar/main-toolbar.component';
import { AdminModule } from './components/admin/admin.module';

@NgModule({
    declarations: [
        AppComponent,
        DbServicesComponent,
        StoreSidebarComponent,
        MainComponent,
        ActionsComponent,
        CartSummaryComponent,
        SearchToolbarComponent,
        BooksGridComponent,
        BookDetailsComponent,
        BookCardComponent,
        MainToolbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AdminModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
