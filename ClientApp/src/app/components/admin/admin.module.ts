import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-rooting.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { RelatedBookTableComponent } from './related-book/related-book-table.component';
import { AdminSidebarComponent } from './sidebar/admin-sidebar.component';
import { PublisherFormComponent } from './publishers/publisher-form.component';
import { CategoryFormComponent } from './categories/category-form.component';
import { BookFormComponent } from './books/book-form.component';
import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { BookInfoComponent } from './books/book-info.component';
import { AdminToolbarComponent } from './admin-shared/admin-toolbar.component';
import { AdminFilterComponent } from './admin-shared/admin-filter.component';
import { TableHeadComponent } from './admin-shared/table-head.component';
import { DbServicesComponent } from './dbServices/dbServices.component';
import { OrderSelectionComponent } from './orders/order-selection.component';
import { SharedModule } from '../shared/shared.module';
import { PublishersSectionComponent } from './publishers/publishers-section.component';
import { PublishersTableComponent } from './publishers/publishers-table.component';
import { CategoriesTableComponent } from './categories/categories-table.component';
import { CategoriesSectionComponent } from './categories/categories-section.component';
import { BooksSectionComponent } from './books/books-section.component';
import { BooksTableComponent } from './books/books-table.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AdminRoutingModule,
        SharedModule,
    ],
    declarations: [
        RelatedBookTableComponent,
        AdminSidebarComponent,

        PublishersTableComponent,
        PublisherFormComponent,
        PublishersSectionComponent,

        CategoryFormComponent,
        CategoriesTableComponent,
        CategoriesSectionComponent,

        BooksSectionComponent,
        BooksTableComponent,
        BookFormComponent,
        BookInfoComponent,

        AdminLayoutComponent,
        AdminToolbarComponent,
        AdminFilterComponent,
        TableHeadComponent,
        DbServicesComponent,
        OrderSelectionComponent,
    ],
    exports: [AdminToolbarComponent],
    providers: [],
})
export class AdminModule { }
