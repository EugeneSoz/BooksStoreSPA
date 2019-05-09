import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Order } from '../../../models/dataDTO/order';
import { CartService } from '../../../services/cart.service';

@Component({
    templateUrl: './checkout-summary.component.html',
})
export class CheckoutSummaryComponent {
    constructor(
        private _router: Router,
        public order: Order,
        public cart: CartService) {
        if (order.payment.cardNumber == null
            || order.payment.cardExpiry == null
            || order.payment.cardSecurityCode == null) {
            _router.navigateByUrl("/checkout/payment");
        }
    }

    onSubmitOrder() {
        this.order.submit();
        this._router.navigateByUrl("/store/confirmation");
    }
}
