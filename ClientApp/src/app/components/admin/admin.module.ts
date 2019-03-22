import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

import { RelatedBookTableComponent } from './related-book-table.component';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { PublishersSelectionComponent } from './publishers/publishers-selection.component';
import { PublisherFormComponent } from './publishers/publisher-form.component';
import { CategoriesSelectionComponent } from './categories/categories-selection.component';
import { CategoryFormComponent } from './categories/category-form.component';
import { BooksSelectionComponent } from './books/books-selection.component';
import { BookFormComponent } from './books/book-form.component';
import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { BookInfoComponent } from './books/book-info.component';
import { PublisherService } from '../../services/publisher.service';
import { PaginationComponent } from '../shared/pagination.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        RelatedBookTableComponent,
        AdminSidebarComponent,
        PublishersSelectionComponent,
        PublisherFormComponent,
        CategoriesSelectionComponent,
        CategoryFormComponent,
        BooksSelectionComponent,
        BookFormComponent,
        BookInfoComponent,
        AdminLayoutComponent,
        PaginationComponent
    ],
    exports: [],
    providers: [PublisherService]
})
export class AdminModule { }
