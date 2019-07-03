import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreRoutingModule } from './store-routing.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../shared/shared.module';
import { BookCardComponent } from './components/book/book-card.component';
import { CheckoutDetailsComponent } from './components/order/checkout-details.component';
import { BooksGridComponent } from './components/book/books-grid.component';
import { ActionsComponent } from './components/toolbar/actions.component';
import { BookDetailsComponent } from './components/book/book-details.component';
import { CartSummaryComponent } from './components/toolbar/cart-summary.component';
import { MainToolbarComponent } from './components/toolbar/main-toolbar.component';
import { SearchToolbarComponent } from './components/toolbar/search-toolbar.component';
import { MainComponent } from './components/main/main.component';
import { EmptyToolbarComponent } from './components/toolbar/empty-toolbar.component';
import { StoreSidebarComponent } from './components/main/store-sidebar.component';
import { CartDetailsComponent } from './components/cart/cart-details.component';
import { CheckoutPaymentComponent } from './components/order/checkout-payment.component';
import { CheckoutSummaryComponent } from './components/order/checkout-summary.component';
import { OrderConfirmationComponent } from './components/order/order-confirmation.component';
import { StoreService } from './shared/store.service';
import { CartService } from './shared/cart.service';
import { Order } from '../models/domain/order.model';
import { StoreLayoutComponent } from './layouts/store-layout.component';
import { OrderLayoutComponent } from './layouts/order-layout.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreRoutingModule,
        SharedModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
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
        OrderConfirmationComponent,
        StoreLayoutComponent,
        OrderLayoutComponent
    ],
    providers: [
        StoreService,
        CartService,
        Order
    ],
})
export class StoreModule { }
