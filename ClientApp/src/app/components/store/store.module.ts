import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';

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
import { CheckoutDetailsComponent } from './order/checkout-details.component';
import { CheckoutPaymentComponent } from './order/checkout-payment.component';
import { CheckoutSummaryComponent } from './order/checkout-summary.component';
import { OrderConfirmationComponent } from './order/order-confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Order } from '../../data/order';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


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
        OrderConfirmationComponent
    ],
    providers: [
        StoreService,
        CartService,
        Order
    ],
})
export class StoreModule { }
