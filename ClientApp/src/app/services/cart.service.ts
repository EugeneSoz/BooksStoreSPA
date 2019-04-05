import { Injectable } from '@angular/core';

import { ProductSelection } from '../models/productSelection';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { HttpMethod } from '../enums/httpMethods';

@Injectable()
export class CartService {
    constructor(
        private _urls: Urls,
        private _rest: RestDatasource) {

        this.getCartData();
    }

    selections: Array<ProductSelection> = new Array<ProductSelection>();
    itemCount: number = 0;
    totalPrice: number = 0;

    addProduct(book: BookResponse): void {
        let selection = this.selections.find(ps => ps.itemId == book.id);
        if (selection) {
            selection.quantity++;
        }
        else {
            this.selections.push(new ProductSelection(book.id, book.title, book.price, 1));
        }
        this.update();
    }

    updateQuantity(bookId: number, quantity: number): void {
        if (quantity > 0) {
            let selection = this.selections.find(ps => ps.itemId == bookId);
            if (selection) {
                selection.quantity = quantity;
            }
        }
        else {
            //если количество равно нулю, то удаляем товар из корзины
            let index = this.selections.findIndex(ps => ps.itemId == bookId);
            if (index != -1) {
                this.selections.splice(index, 1);
            }
        }
        this.update();
    }

    clear(): void {
        this.selections = new Array<ProductSelection>();
        this.update();
    }

    storeCartData(): void {
        this._rest.create(this._urls.session, this.selections)
            .subscribe(response => { });
    }

    getCartData(): void {
        this._rest.getAll<Array<ProductSelection>>(this._urls.session)
            .subscribe(response => {
                let cartData = this._rest.getResponseBody(response, HttpMethod.POST);
                if (cartData != null) {
                    for (let item of cartData) {
                        this.selections.push(item);
                    }
                    this.update(false);
                }
            });
    }

    private update(storeCart: boolean = true): void {
        this.itemCount = this.selections.map(ps => ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);

        this.totalPrice = this.selections.map(ps => ps.quantity * ps.price)
            .reduce((prev, curr) => prev + curr, 0);

        if (storeCart) {
            this.storeCartData();
        }
    }
}
