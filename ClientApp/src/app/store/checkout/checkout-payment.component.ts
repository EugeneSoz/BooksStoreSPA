import { Component } from "@angular/core";

import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent } from '../../models/components/base-form.model';
import { PaymentFormGroup } from '../../models/forms/payment-form.model';
import { Order, Payment } from '../../models/domain/order.model';
import { nameof } from '../../core/helper-functions';

@Component({
    templateUrl: './checkout-payment.component.html',
})
export class CheckoutPaymentComponent extends BaseFormComponent<PaymentFormGroup> {
    constructor(
        private _router: Router,
        private _order: Order,
        activeRoute: ActivatedRoute) {

        super();
        this.form = new PaymentFormGroup(_order);

        if (_order.name == null || _order.address == null) {
            _router.navigateByUrl("/store/checkout");
        }
    }

    onSubmitForm(): void {
        if (this.form.valid) {
            this._order.payment.cardNumber = this.form.get(nameof<Payment>("cardNumber")).value;
            this._order.payment.cardExpiry = this.form.get(nameof<Payment>("cardExpiry")).value;
            this._order.payment.cardSecurityCode = this.form.get(nameof<Payment>("cardSecurityCode")).value;

            this._router.navigateByUrl("/store/summary");
        }
    }
}
