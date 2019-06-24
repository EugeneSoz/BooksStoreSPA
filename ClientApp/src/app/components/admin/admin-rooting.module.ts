import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { DbServicesComponent } from './dbServices/dbServices.component';
import { PublishersTableComponent } from './publishers/publishers-table.component';
import { OrderSelectionComponent } from './orders/order-selection.component';
import { CategoryFormComponent } from './categories/category-form.component';
import { BookFormComponent } from './books/book-form.component';
import { PublishersSectionComponent } from './publishers/publishers-section.component';
import { CategoriesSectionComponent } from './categories/categories-section.component';
import { CategoriesTableComponent } from './categories/categories-table.component';
import { BooksSectionComponent } from './books/books-section.component';
import { BooksTableComponent } from './books/books-table.component';
import { PageLink } from '../../enums/pageLink';
import { PublisherFormComponent } from './publishers/publisher-form.component';

const routes: Routes = [
    {
        path: PageLink.base, component: AdminLayoutComponent,
        children: [
            { path: PageLink.admin_services, component: DbServicesComponent },
            { path: PageLink.base, component: DbServicesComponent },
            {
                path: PageLink.admin_books, component: BooksSectionComponent,
                children: [
                    { path: ":mode/:id", component: BookFormComponent },
                    { path: ":mode", component: BookFormComponent },
                    { path: "", component: BooksTableComponent }
                ]
            },
            {
                path: PageLink.admin_categories, component: CategoriesSectionComponent,
                children: [
                    { path: ":mode/:id", component: CategoryFormComponent },
                    { path: ":mode", component: CategoryFormComponent },
                    { path: PageLink.base, component: CategoriesTableComponent }
                ]
            },
            {
                path: PageLink.admin_publishers, component: PublishersSectionComponent,
                children: [
                    { path: ":mode/:id", component: PublisherFormComponent },
                    { path: ":mode", component: PublisherFormComponent },
                    { path: PageLink.base, component: PublishersTableComponent},
                ]
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
