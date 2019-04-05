import { Component } from "@angular/core";
import { CartService } from '../../../services/cart.service';

@Component({
    templateUrl: './cart-details.component.html',
})
export class CartDetailsComponent {
    constructor(
        public cart: CartService) { }

    onUpdate(bookId: number, quantity: string): void {
        let q = Number.parseInt(quantity);
        this.cart.updateQuantity(bookId, q);
    }
}
