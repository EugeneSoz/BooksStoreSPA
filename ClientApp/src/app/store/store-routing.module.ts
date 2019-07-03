import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { BookDetailsComponent } from './components/book/book-details.component';
import { CartDetailsComponent } from './components/cart/cart-details.component';
import { CheckoutDetailsComponent } from './components/order/checkout-details.component';
import { CheckoutPaymentComponent } from './components/order/checkout-payment.component';
import { CheckoutSummaryComponent } from './components/order/checkout-summary.component';
import { OrderConfirmationComponent } from './components/order/order-confirmation.component';
import { PageLink } from '../models/enums/page-link.enum';
import { StoreLayoutComponent } from './layouts/store-layout.component';


const routes: Routes = [
    {
        path: PageLink.empty, component: StoreLayoutComponent,
        children: [
            { path: PageLink.empty, component: MainComponent },
            { path: "details/:id", component: BookDetailsComponent }
        ]
    },
    { path: "", redirectTo: `/${PageLink.store}`, pathMatch: "full" },
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
