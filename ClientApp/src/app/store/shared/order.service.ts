import { Injectable } from '@angular/core';

import { OrderLine } from '../../models/order-line.model';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { Order } from '../../models/domain/order.model';
import { Url } from '../../models/url.model';
import { RestDatasource } from '../../core/rest-datasource.service';
import { OrderConfirmation } from '../../models/order.confirmation.model';

@Injectable()
export class OrderService {
    constructor(
        private _cart: CartService,
        private _rest: RestDatasource) {
        //router.events
        //    .filter(event => event instanceof NavigationStart)
        //    .subscribe(event => {
        //        if (router.url.startsWith("/checkout")
        //            && this.name != null && this.address != null) {
        //            repo.storeSessionData("checkout", {
        //                name: this.name,
        //                address: this.address,
        //                cardNumber: this.payment.cardNumber,
        //                cardExpiry: this.payment.cardExpiry,
        //                cardSecurityCode: this.payment.cardSecurityCode
        //            });
        //        }
        //    });
        //repo.getSessionData("checkout").subscribe(data => {
        //    if (data != null) {
        //        this.name = data.name;
        //        this.address = data.address;
        //        this.payment.cardNumber = data.cardNumber;
        //        this.payment.cardExpiry = data.cardExpiry;
        //        this.payment.cardSecurityCode = data.cardSecurityCode;
        //    }
        //})
    }

    submitted: boolean = false;

    //все заказы
    get goods(): Array<OrderLine> {
        return this._cart.lines
            .map(p => new OrderLine(p.itemId, p.quantity));
    }

    getOrders(): Observable<Array<Order>> {
        return this._rest.getAll<Array<Order>>(Url.orders);
    }

    createOrder(order: Order): Observable<OrderConfirmation> {
        return this._rest.receiveAll<OrderConfirmation, Order>(Url.orders, order);
    }

    shipOrder(order: Order): Observable<void> {
        return this._rest.getOne<void>(`${Url.orders}/${order.orderId}`);
    }

    clear(): void {
        //this.name = null;
        //this.address = null;
        //this.payment = new Payment();
        this._cart.clear();
        this.submitted = false;
    }

    submit() {
        this.submitted = true;
        //this._cart.createOrder(this);
    }
}
