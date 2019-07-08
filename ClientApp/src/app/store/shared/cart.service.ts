import { Injectable } from '@angular/core';

import { Order } from '../../models/domain/order.model';
import { BookResponse } from '../../models/domain/DTO/book-response.model';
import { Url } from '../../models/url.model';
import { RestDatasource } from '../../core/rest-datasource.service';
import { CartLine } from '../../models/domain/DTO/cart-line.model';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {
    constructor(
        private _rest: RestDatasource) {
        this.getCartData().subscribe(response => {
            let cartData = response;
            if (cartData != null) {
                for (let item of cartData) {
                    this.lines.push(item);
                }
                this.update(false);
            }
        });
    }

    lines: Array<CartLine> = new Array<CartLine>();
    itemCount: number = 0;
    totalPrice: number = 0;

    addToCart(book: BookResponse): void {
        let line = this.lines.find(l => l.itemId == book.id);
        if (line) {
            line.quantity++;
        }
        else {
            this.lines.push(new CartLine(book.id, book.title, book.price, 1));
        }
        this.update();
    }

    updateQuantity(bookId: number, quantity: number): void {
        if (quantity > 0) {
            let line = this.lines.find(l => l.itemId == bookId);
            if (line) {
                line.quantity = quantity;
            }
        }
        else {
            //если количество равно нулю, то удаляем товар из корзины
            let index = this.lines.findIndex(l => l.itemId == bookId);
            if (index != -1) {
                this.lines.splice(index, 1);
            }
        }
        this.update();
    }

    clear(): void {
        this.lines = new Array<CartLine>();
        this.update();
    }

    private storeCartData(): void {
        this._rest.create(Url.session, this.lines)
            .subscribe(response => { });
    }

    private getCartData(): Observable<Array<CartLine>> {
        return this._rest.getAll<Array<CartLine>>(Url.session)
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
        this.itemCount = this.lines.map(l => l.quantity)
            .reduce((prev, curr) => prev + curr, 0);

        this.totalPrice = this.lines.map(l => l.quantity * l.price)
            .reduce((prev, curr) => prev + curr, 0);

        if (storeCart) {
            this.storeCartData();
        }
    }
}
