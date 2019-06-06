import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Order } from '../../../data/order';

@Component({
    templateUrl: './order-confirmation.component.html',
})
export class OrderConfirmationComponent {
    constructor(
        private _router: Router,
        public order: Order) {
        if (!order.submitted) {
            _router.navigateByUrl("/store/summary");
        }
    }
}
