import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PageLink } from '../models/enums/page-link.enum';
import { StoreComponent } from './store.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartDetailsComponent } from './cart-detail/cart-details.component';
import { CheckoutDetailsComponent } from './checkout/checkout-details.component';
import { CheckoutPaymentComponent } from './checkout/checkout-payment.component';
import { CheckoutSummaryComponent } from './checkout/checkout-summary.component';
import { OrderConfirmationComponent } from './checkout/order-confirmation.component';
import { BooksListComponent } from './books-list/books-list.component';


const routes: Routes = [
    {
        path: PageLink.store, component: StoreComponent,
        children: [
            { path: "", component: BooksListComponent },
            { path: "details/:id", component: BookDetailComponent },
            { path: "cart", component: CartDetailsComponent },
            { path: "checkout", component: CheckoutDetailsComponent },
            { path: "payment", component: CheckoutPaymentComponent },
            { path: "summary", component: CheckoutSummaryComponent },
            { path: "confirmation", component: OrderConfirmationComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreRoutingModule { }
