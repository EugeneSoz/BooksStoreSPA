import { Injectable } from '@angular/core';

import { Order } from '../../models/domain/order.model';
import { BookResponse } from '../../models/domain/DTO/book-response.model';
import { Url } from '../../models/url.model';
import { RestDatasource } from '../../core/rest-datasource.service';
import { Cart } from '../../models/cart.model';
import { CartLine } from '../../models/domain/DTO/cart-line.model';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {
    constructor(
        private _rest: RestDatasource) {
        this._cart = new Cart();
        this.getCartData().subscribe(response => {
            let cartData = response;
            if (cartData != null) {
                for (let item of cartData) {
                    this._cart.lines.push(item);
                }
                this.update(false);
            }
        });
    }

    private _cart: Cart;
    get itemCount(): number {
        return this._cart.itemCount;
    }

    get totalPrice(): number {
        return this._cart.totalPrice;
    }

    get lines(): Array<CartLine> {
        return this._cart.lines;
    }

    addToCart(book: BookResponse): void {
        let line = this._cart.lines.find(ps => ps.itemId == book.id);
        if (line) {
            line.quantity++;
        }
        else {
            this._cart.lines.push(new CartLine(book.id, book.title, book.price, 1));
        }
        this.update();
    }

    updateQuantity(bookId: number, quantity: number): void {
        if (quantity > 0) {
            let line = this._cart.lines.find(ps => ps.itemId == bookId);
            if (line) {
                line.quantity = quantity;
            }
        }
        else {
            //если количество равно нулю, то удаляем товар из корзины
            let index = this._cart.lines.findIndex(ps => ps.itemId == bookId);
            if (index != -1) {
                this._cart.lines.splice(index, 1);
            }
        }
        this.update();
    }

    clear(): void {
        this._cart.lines = new Array<CartLine>();
        this.update();
    }

    private storeCartData(): void {
        this._rest.create(Url.session, this._cart.lines)
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
        this._cart.itemCount = this._cart.lines.map(l => l.quantity)
            .reduce((prev, curr) => prev + curr, 0);

        this._cart.totalPrice = this._cart.lines.map(l => l.quantity * l.price)
            .reduce((prev, curr) => prev + curr, 0);

        if (storeCart) {
            this.storeCartData();
        }
    }
}
