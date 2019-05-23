import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { DbServicesComponent } from './dbServices/dbServices.component';
import { PublishersTableComponent } from './publishers/publishers-table.component';
import { OrderSelectionComponent } from './orders/order-selection.component';
import { PublisherFormComponent } from './publishers/publisher-form.component';
import { CategoryFormComponent } from './categories/category-form.component';
import { BookFormComponent } from './books/book-form.component';
import { PublishersSectionComponent } from './publishers/publishers-section.component';
import { CategoriesSectionComponent } from './categories/categories-section.component';
import { CategoriesTableComponent } from './categories/categories-table.component';
import { BooksSectionComponent } from './books/books-section.component';
import { BooksTableComponent } from './books/books-table.component';

const routes: Routes = [
    {
        path: "", component: AdminLayoutComponent,
        children: [
            { path: "admin/services", component: DbServicesComponent },
            { path: "", component: DbServicesComponent },
            {
                path: "admin/books", component: BooksSectionComponent,
                children: [
                    { path: ":mode/:id", component: BookFormComponent },
                    { path: ":mode", component: BookFormComponent },
                    { path: "", component: BooksTableComponent }
                ]
            },
            {
                path: "admin/categories", component: CategoriesSectionComponent,
                children: [
                    { path: ":mode/:id", component: CategoryFormComponent },
                    { path: ":mode", component: CategoryFormComponent },
                    { path: "", component: CategoriesTableComponent }
                ]
            },
            {
                path: "admin/publishers", component: PublishersSectionComponent,
                children: [
                    { path: ":mode/:id", component: PublisherFormComponent },
                    { path: ":mode", component: PublisherFormComponent },
                    { path: "", component: PublishersTableComponent},
                ]
            },
            { path: "admin/orders", component: OrderSelectionComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
