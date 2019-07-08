import { Component } from "@angular/core";

import { CartService } from '../shared/cart.service';
import { PageLink } from '../../models/enums/page-link.enum';

@Component({
    templateUrl: './cart-details.component.html',
})
export class CartDetailsComponent {
    constructor(
        public cart: CartService) { }

    storePageLink: string = `/${PageLink.store}`;

    get isCartEmpty(): boolean {
        return this.cart.itemCount == 0 ? true : false;
    }

    onUpdate(bookId: number, quantity: string): void {
        let q = Number.parseInt(quantity);
        this.cart.updateQuantity(bookId, q);
    }
}
