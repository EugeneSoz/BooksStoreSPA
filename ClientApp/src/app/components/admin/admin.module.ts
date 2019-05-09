import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Subject } from 'rxjs';

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
import { AdminToolbarComponent } from '../shared/admin-toolbar.component';
import { AdminFilterComponent } from '../shared/admin-filter.component';
import { TableHeadComponent } from '../shared/table-head.component';
import { DbServicesComponent } from './dbServices.component';
import { SharedModule } from '../shared/shared.module';
import { Entity_Changed, EntityEventArgs } from '../../models/events/entityEventArgs';
import { OrderSelectionComponent } from './orders/order-selection.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
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
        OrderSelectionComponent
    ],
    exports: [AdminToolbarComponent],
    providers: [
        { provide: Entity_Changed, useValue: new Subject<EntityEventArgs>() }
    ]
})
export class AdminModule { }
