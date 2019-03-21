import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbServicesComponent } from './components/admin/dbServices.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout.component';
import { PaginationComponent } from './components/shared/pagination.component';
import { PageButtonComponent } from './components/shared/page-button.component';
import { RelatedBookTableComponent } from './components/admin/related-book-table.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar.component';
import { PublisherFormComponent } from './components/admin/publishers/publisher-form.component';
import { PublishersSelectionComponent } from './components/admin/publishers/publishers-selection.component';
import { CategoriesSelectionComponent } from './components/admin/categories/categories-selection.component';
import { BooksSelectionComponent } from './components/admin/books/books-selection.component';
import { BookFormComponent } from './components/admin/books/book-form.component';
import { CategoryFormComponent } from './components/admin/categories/category-form.component';
import { BookInfoComponent } from './components/admin/books/book-info.component';
import { StoreSidebarComponent } from './components/store/store-sidebar.component';
import { MainComponent } from './components/store/main.component';
import { ActionsComponent } from './components/store/toolbar/actions.component';
import { CartSummaryComponent } from './components/store/toolbar/cart-summary.component';
import { SearchToolbarComponent } from './components/store/toolbar/search-toolbar.component';
import { BooksGridComponent } from './components/store/book/books-grid.component';
import { BookDetailsComponent } from './components/store/book/book-details.component';
import { BookCardComponent } from './components/store/book/book-card.component';
import { MainToolbarComponent } from './components/store/toolbar/main-toolbar.component';

@NgModule({
    declarations: [
        AppComponent,
        DbServicesComponent,
        AdminLayoutComponent,
        PageButtonComponent,
        PaginationComponent,
        RelatedBookTableComponent,
        AdminSidebarComponent,
        PublisherFormComponent,
        PublishersSelectionComponent,
        CategoriesSelectionComponent,
        BooksSelectionComponent,
        BookFormComponent,
        CategoryFormComponent,
        BookInfoComponent,
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
        HttpClientModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
