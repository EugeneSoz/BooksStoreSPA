import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../../models/dataDTO/order';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { BaseForm } from '../../../viewModels/baseForm';
import { CheckoutFormGroup } from '../../../models/forms/checkoutForm';

@Component({
    templateUrl: './checkout-details.component.html',
})
export class CheckoutDetailsComponent extends BaseForm<CheckoutFormGroup> {
    constructor(
        private _router: Router,
        private _order: Order,
        private _nh: NameOfHelper,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new CheckoutFormGroup(_nh, _order);
        if (_order.products.length == 0) {
            this._router.navigateByUrl("/store/cart");
        }
    }

    onSubmitForm(): void {
        if (this.form.valid) {
            this._order.name = this.form.get(this._nh.nameof<Order>("name")).value;
            this._order.address = this.form.get(this._nh.nameof<Order>("address")).value;

            this._router.navigateByUrl("/store/payment");
        }
    }
}
