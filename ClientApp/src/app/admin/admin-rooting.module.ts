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

const booksChild: Routes = [
    { path: ":mode/:id", component: BookFormComponent },
    { path: ":mode", component: BookFormComponent },
    { path: PageLink.empty, component: BooksTableComponent }
];

const categoriesChild: Routes = [
    { path: ":mode/:id", component: CategoryFormComponent },
    { path: ":mode", component: CategoryFormComponent },
    { path: PageLink.empty, component: CategoriesTableComponent }
];

const publishersChild: Routes = [
    { path: ":mode/:id", component: PublisherFormComponent },
    { path: ":mode", component: PublisherFormComponent },
    { path: PageLink.empty, component: PublishersTableComponent },
];

const routes: Routes = [
    {
        path: PageLink.empty, component: AdminLayoutComponent,
        children: [
            {
                path: "", children: [
                    { path: PageLink.empty, component: DbServicesComponent },
                    { path: PageLink.admin_services, component: DbServicesComponent },
                    {
                        path: PageLink.admin_books, component: BooksSectionComponent,
                        children: booksChild
                    },
                    {
                        path: PageLink.admin_categories, component: CategoriesSectionComponent,
                        children: categoriesChild
                    },
                    {
                        path: PageLink.admin_publishers, component: PublishersSectionComponent,
                        children: publishersChild
                    },
                    { path: PageLink.admin_orders, component: OrderSelectionComponent }
                ]
            }
        ]
    },
    //{ path: PageLink.admin, redirectTo: PageLink.admin_services, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
