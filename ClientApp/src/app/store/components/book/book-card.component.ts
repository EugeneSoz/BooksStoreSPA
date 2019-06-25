import { Component, Input } from '@angular/core';

import { CartService } from '../../shared/cart.service';
import { BookResponse } from '../../../models/domain/DTO/book-response.model';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
    constructor(
        private _cart: CartService) { }

    @Input() book: BookResponse = null;

    onAddToCart(): void {
        this._cart.addProduct(this.book);
    }
}
