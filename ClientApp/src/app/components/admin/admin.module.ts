import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-rooting.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

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
import { AdminToolbarComponent } from '../shared/admin-toolbar.component';
import { AdminFilterComponent } from '../shared/admin-filter.component';
import { TableHeadComponent } from '../shared/table-head.component';
import { DbServicesComponent } from './dbServices.component';
import { OrderSelectionComponent } from './orders/order-selection.component';
import { DeleteMessageComponent } from '../modals/delete-message.component';
import { SharedModule } from '../shared/shared.module';
import { PublishersSectionComponent } from './publishers/publishers-section.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        SharedModule,
        TooltipModule.forRoot()
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
        AdminToolbarComponent,
        AdminFilterComponent,
        TableHeadComponent,
        DbServicesComponent,
        OrderSelectionComponent,
        PublishersSectionComponent
    ],
    exports: [AdminToolbarComponent],
    providers: []
})
export class AdminModule { }
