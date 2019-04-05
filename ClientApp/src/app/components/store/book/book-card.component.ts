import { Component, Input } from '@angular/core';
import { BookResponse } from 'src/app/models/dataDTO/bookResponse';
import { CartService } from '../../../services/cart.service';

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
