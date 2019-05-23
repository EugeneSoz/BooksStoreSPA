import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../layouts/admin-layout.component';
import { DbServicesComponent } from './dbServices.component';
import { BooksSelectionComponent } from './books/books-selection.component';
import { CategoriesSelectionComponent } from './categories/categories-selection.component';
import { PublishersSelectionComponent } from './publishers/publishers-selection.component';
import { OrderSelectionComponent } from './orders/order-selection.component';
import { PublisherFormComponent } from './publishers/publisher-form.component';
import { CategoryFormComponent } from './categories/category-form.component';
import { BookFormComponent } from './books/book-form.component';
import { PublishersSectionComponent } from './publishers/publishers-section.component';

const routes: Routes = [
    {
        path: "", component: AdminLayoutComponent,
        children: [
            { path: "admin/services", component: DbServicesComponent },
            { path: "", component: DbServicesComponent },
            { path: "admin/books", component: BooksSelectionComponent },
            { path: "admin/categories", component: CategoriesSelectionComponent },
            {
                path: "admin/publishers", component: PublishersSectionComponent,
                children: [
                    { path: ":mode/:id", component: PublisherFormComponent },
                    { path: ":mode", component: PublisherFormComponent },
                    { path: "", component: PublishersSelectionComponent},
                ]
            },
            { path: "admin/orders", component: OrderSelectionComponent }
        ],
    },
    
    { path: "admin/categories/:mode/:id", component: CategoryFormComponent },
    { path: "admin/categories/:mode", component: CategoryFormComponent },
    { path: "admin/books/:mode/:id", component: BookFormComponent },
    { path: "admin/books/:mode", component: BookFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
