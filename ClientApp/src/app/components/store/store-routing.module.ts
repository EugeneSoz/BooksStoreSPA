import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book/book-details.component';
import { MainComponent } from './main.component';
import { CartDetailsComponent } from './cart/cart-details.component';
import { CheckoutDetailsComponent } from './order/checkout-details.component';
import { CheckoutPaymentComponent } from './order/checkout-payment.component';
import { CheckoutSummaryComponent } from './order/checkout-summary.component';
import { OrderConfirmationComponent } from './order/order-confirmation.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "details/:id", component: BookDetailsComponent },
    { path: "cart", component: CartDetailsComponent },
    { path: "checkout", component: CheckoutDetailsComponent },
    { path: "payment", component: CheckoutPaymentComponent },
    { path: "summary", component: CheckoutSummaryComponent },
    { path: "confirmation", component: OrderConfirmationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreRoutingModule { }
