import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-rooting.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RelatedBookTableComponent } from './components/related-books/related-books-table.component';
import { AdminSidebarComponent } from './components/sidebar/admin-sidebar.component';
import { PublisherFormComponent } from './components/publishers/publisher-form.component';
import { CategoryFormComponent } from './components/categories/category-form.component';
import { BookFormComponent } from './components/books/book-form.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { BookInfoComponent } from './components/books/book-info.component';
import { AdminFilterComponent } from './components/admin-shared/admin-filter.component';
import { TableHeadComponent } from './components/admin-shared/table-head.component';
import { DbServicesComponent } from './components/db-services/db-services.component';
import { OrderSelectionComponent } from './components/orders/order-selection.component';
import { PublishersSectionComponent } from './components/publishers/publishers-section.component';
import { PublishersTableComponent } from './components/publishers/publishers-table.component';
import { CategoriesTableComponent } from './components/categories/categories-table.component';
import { CategoriesSectionComponent } from './components/categories/categories-section.component';
import { BooksSectionComponent } from './components/books/books-section.component';
import { BooksTableComponent } from './components/books/books-table.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from '../shared/shared.module';
import { AdminToolbarComponent } from './components/admin-shared/admin-toolbar.component';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TypeaheadModule.forRoot(),
        TabsModule.forRoot(),
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
        AdminFilterComponent,
        AdminToolbarComponent,
        TableHeadComponent,
        DbServicesComponent,
        OrderSelectionComponent,
    ],
    exports: [],
    providers: [],
})
export class AdminModule { }
