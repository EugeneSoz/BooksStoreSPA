import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../../app-routing.module';
import { StoreService } from '../../services/store.service';
import { BookCardComponent } from './book/book-card.component';
import { BookDetailsComponent } from './book/book-details.component';
import { BooksGridComponent } from './book/books-grid.component';
import { ActionsComponent } from './toolbar/actions.component';
import { CartSummaryComponent } from './toolbar/cart-summary.component';
import { MainToolbarComponent } from './toolbar/main-toolbar.component';
import { SearchToolbarComponent } from './toolbar/search-toolbar.component';
import { MainComponent } from './main.component';
import { StoreSidebarComponent } from './store-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyToolbarComponent } from './toolbar/empty-toolbar.component';
import { CartService } from '../../services/cart.service';
import { CartDetailsComponent } from './cart/cart-details.component';
import { Order } from '../../models/dataDTO/order';
import { CheckoutDetailsComponent } from './order/checkout-details.component';
import { CheckoutPaymentComponent } from './order/checkout-payment.component';
import { CheckoutSummaryComponent } from './order/checkout-summary.component';
import { OrderConfirmationComponent } from './order/order-confirmation.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        BookCardComponent,
        BookDetailsComponent,
        BooksGridComponent,
        ActionsComponent,
        CartSummaryComponent,
        MainToolbarComponent,
        SearchToolbarComponent,
        MainComponent,
        StoreSidebarComponent,
        EmptyToolbarComponent,
        CartDetailsComponent,
        CheckoutDetailsComponent,
        CheckoutPaymentComponent,
        CheckoutSummaryComponent,
        OrderConfirmationComponent
    ],
    providers: [
        StoreService,
        CartService,
        Order
    ],
})
export class StoreModule { }
