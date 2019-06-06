import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { BookResponse } from '../../../data/DTO/bookResponse';

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
