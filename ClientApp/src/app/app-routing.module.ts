import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbServicesComponent } from './components/admin/dbServices.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout.component';
import { BooksSelectionComponent } from './components/admin/books/books-selection.component';
import { CategoriesSelectionComponent } from './components/admin/categories/categories-selection.component';
import { PublishersSelectionComponent } from './components/admin/publishers/publishers-selection.component';
import { MainComponent } from './components/store/main.component';
import { BookDetailsComponent } from './components/store/book/book-details.component';
import { PublisherFormComponent } from './components/admin/publishers/publisher-form.component';
import { CategoryFormComponent } from './components/admin/categories/category-form.component';
import { BookFormComponent } from './components/admin/books/book-form.component';
import { CartDetailsComponent } from './components/store/cart/cart-details.component';
import { CheckoutDetailsComponent } from './components/store/order/checkout-details.component';
import { CheckoutPaymentComponent } from './components/store/order/checkout-payment.component';
import { CheckoutSummaryComponent } from './components/store/order/checkout-summary.component';
import { OrderConfirmationComponent } from './components/store/order/order-confirmation.component';
import { OrderSelectionComponent } from './components/admin/orders/order-selection.component';

const routes: Routes = [
    {
        path: "", component: AdminLayoutComponent,
        children: [
            { path: "admin/services", component: DbServicesComponent },
            { path: "", component: DbServicesComponent },
            { path: "admin/books", component: BooksSelectionComponent },
            { path: "admin/categories", component: CategoriesSelectionComponent },
            { path: "admin/publishers", component: PublishersSelectionComponent },
            { path: "admin/orders", component: OrderSelectionComponent }
        ],
    },
    { path: "admin/publishers/:mode/:id", component: PublisherFormComponent },
    { path: "admin/publishers/:mode", component: PublisherFormComponent },
    { path: "admin/categories/:mode/:id", component: CategoryFormComponent },
    { path: "admin/categories/:mode", component: CategoryFormComponent },
    { path: "admin/books/:mode/:id", component: BookFormComponent },
    { path: "admin/books/:mode", component: BookFormComponent },
    { path: "store/details/:id", component: BookDetailsComponent },
    { path: "store", component: MainComponent },
    { path: "store/cart", component: CartDetailsComponent },
    { path: "store/checkout", component: CheckoutDetailsComponent },
    { path: "store/payment", component: CheckoutPaymentComponent },
    { path: "store/summary", component: CheckoutSummaryComponent },
    { path: "store/confirmation", component: OrderConfirmationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
