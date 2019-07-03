import { Component } from "@angular/core";

import { CartService } from '../../store/shared/cart.service';
import { Order } from '../../models/domain/order.model';

@Component({
    templateUrl: './orders-section.component.html',
    providers: [CartService]
})
export class OrderSectionComponent {
    constructor(
        private _cart: CartService) { }

    get orders(): Array<Order> {
        return this._cart.orders;
    }

    markShipped(order: Order) {
        this._cart.shipOrder(order);
    }
}
