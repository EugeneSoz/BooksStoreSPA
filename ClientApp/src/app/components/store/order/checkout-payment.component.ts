import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { PaymentFormGroup } from '../../../models/forms/paymentForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { BaseForm } from '../../../models/baseForm';
import { Order, Payment } from '../../../data/order';

@Component({
    templateUrl: './checkout-payment.component.html',
})
export class CheckoutPaymentComponent extends BaseForm<PaymentFormGroup> {
    constructor(
        private _router: Router,
        private _order: Order,
        private _nh: NameOfHelper,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new PaymentFormGroup(_nh, _order);

        if (_order.name == null || _order.address == null) {
            _router.navigateByUrl("/store/checkout");
        }
    }

    onSubmitForm(): void {
        if (this.form.valid) {
            this._order.payment.cardNumber = this.form.get(this._nh.nameof<Payment>("cardNumber")).value;
            this._order.payment.cardExpiry = this.form.get(this._nh.nameof<Payment>("cardExpiry")).value;
            this._order.payment.cardSecurityCode = this.form.get(this._nh.nameof<Payment>("cardSecurityCode")).value;

            this._router.navigateByUrl("/store/summary");
        }
    }
}
