import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { DbServicesComponent } from './components/db-services/db-services.component';
import { PublishersTableComponent } from './components/publishers/publishers-table.component';
import { OrderSelectionComponent } from './components/orders/order-selection.component';
import { CategoryFormComponent } from './components/categories/category-form.component';
import { BookFormComponent } from './components/books/book-form.component';
import { PublishersSectionComponent } from './components/publishers/publishers-section.component';
import { CategoriesSectionComponent } from './components/categories/categories-section.component';
import { CategoriesTableComponent } from './components/categories/categories-table.component';
import { BooksSectionComponent } from './components/books/books-section.component';
import { BooksTableComponent } from './components/books/books-table.component';
import { PublisherFormComponent } from './components/publishers/publisher-form.component';
import { PageLink } from '../models/enums/page-link.enum';

const booksChildren: Routes = [
    { path: ":mode/:id", component: BookFormComponent },
    { path: ":mode", component: BookFormComponent },
    { path: "", component: BooksTableComponent }
];

const categoriesChildren: Routes = [
    { path: ":mode/:id", component: CategoryFormComponent },
    { path: ":mode", component: CategoryFormComponent },
    { path: PageLink.base, component: CategoriesTableComponent }
];

const publishersChildren: Routes = [
    { path: ":mode/:id", component: PublisherFormComponent },
    { path: ":mode", component: PublisherFormComponent },
    { path: PageLink.base, component: PublishersTableComponent },
];

const routes: Routes = [
    {
        path: PageLink.base, component: AdminLayoutComponent,
        children: [
            { path: PageLink.admin_services, component: DbServicesComponent },
            { path: PageLink.base, component: DbServicesComponent },
            {
                path: PageLink.admin_books, component: BooksSectionComponent,
                children: booksChildren
            },
            {
                path: PageLink.admin_categories, component: CategoriesSectionComponent,
                children: categoriesChildren
            },
            {
                path: PageLink.admin_publishers, component: PublishersSectionComponent,
                children: publishersChildren
            },
            { path: PageLink.admin_orders, component: OrderSelectionComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
