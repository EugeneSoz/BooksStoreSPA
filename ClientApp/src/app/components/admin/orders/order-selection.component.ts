import { Component } from "@angular/core";
import { CartService } from '../../../services/cart.service';
import { Order } from '../../../data/order';

@Component({
    templateUrl: './order-selection.component.html',
    providers: [CartService]
})
export class OrderSelectionComponent {
    constructor(
        private _cart: CartService) { }

    get orders(): Array<Order> {
        return this._cart.orders;
    }

    markShipped(order: Order) {
        this._cart.shipOrder(order);
    }
}
