import { Injectable } from '@angular/core';

import { ProductSelection } from '../../models/product-selection.model';
import { Order } from '../../models/domain/order.model';
import { BookResponse } from '../../models/domain/DTO/book-response.model';
import { Url } from '../../models/url.model';
import { RestDatasource } from '../../core/rest-datasource.service';

@Injectable()
export class CartService {
    constructor(
        private _rest: RestDatasource) {

        this.getCartData();
    }

    selections: Array<ProductSelection> = new Array<ProductSelection>();
    orders: Array<Order> = new Array<Order>();
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
        this._rest.create(Url.session, this.selections)
            .subscribe(response => { });
    }

    getCartData(): void {
        //this._rest.getAll<Array<ProductSelection>>(this._urls.session)
        //    .subscribe(response => {
        //        let cartData = this._rest.getResponseBody(response, HttpMethod.POST);
        //        if (cartData != null) {
        //            for (let item of cartData) {
        //                this.selections.push(item);
        //            }
        //            this.update(false);
        //        }
        //    });
    }

    getOrders(): void {
        //this._rest.getAll<Array<Order>>(this._urls.orders)
        //    .subscribe(response => {
        //        this.orders = this._rest.getResponseBody(response, HttpMethod.POST);
        //    });
    }

    createOrder(order: Order): void {
        //this._rest.createObject <{}, OrderConfirmation>(this._urls.orders, {
        //    name: order.name,
        //    address: order.address,
        //    payment: order.payment,
        //    products: order.products
        //}).subscribe(response => {
        //    order.orderConfirmation = this._rest.getResponseBody(response, HttpMethod.POST);
        //    this.clear();
        //    order.clear();
        //});
    }

    shipOrder(order: Order) {
        //this._rest.createObject<Order, void>(`${this._urls.orders}/${order.orderId}`, order)
        //    .subscribe(response => this.getOrders());
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