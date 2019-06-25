import { Component } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
    selector: 'cart-summary',
    templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
    constructor(
        private _cart: CartService) { }

    get itemsCount(): number {
        return this._cart.itemCount;
    }

    get totalPrice(): number {
        return this._cart.totalPrice;
    }
}
