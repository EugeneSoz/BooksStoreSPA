import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { StoreService } from '../../services/store.service';
import { BookCardComponent } from './book/book-card.component';
import { BookDetailsComponent } from './book/book-details.component';
import { BooksGridComponent } from './book/books-grid.component';
import { ActionsComponent } from './toolbar/actions.component';
import { CartSummaryComponent } from './toolbar/cart-summary.component';
import { MainToolbarComponent } from './toolbar/main-toolbar.component';
import { SearchToolbarComponent } from './toolbar/search-toolbar.component';
import { MainComponent } from './main.component';
import { StoreSidebarComponent } from './store-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyToolbarComponent } from './toolbar/empty-toolbar.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        BookCardComponent,
        BookDetailsComponent,
        BooksGridComponent,
        ActionsComponent,
        CartSummaryComponent,
        MainToolbarComponent,
        SearchToolbarComponent,
        MainComponent,
        StoreSidebarComponent,
        EmptyToolbarComponent
    ],
    providers: [StoreService],
})
export class StoreModule { }
