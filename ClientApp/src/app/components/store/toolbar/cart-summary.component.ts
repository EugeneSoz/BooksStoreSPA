import { Component } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
    selector: 'cart-summary',
    templateUrl: './cart-summary.component.html',
    providers: [StoreService]
})
export class CartSummaryComponent {
    constructor(
        private _storeService: StoreService) { }

    itemsCount: number = 0;
    totalPrice: number = 0;
    cartBtnCss: string = `text-white btn btn-sm ml-1'${this.itemsCount == 0 ? ' disabled' : ''}`;

    getDisplayMessage(): string
    {
        let item: string = "книг(и)";

        return `Корзина: ${this.itemsCount} ${item} на ${this.totalPrice}`;
    }
}
