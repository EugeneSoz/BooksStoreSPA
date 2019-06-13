import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { CheckoutFormGroup } from '../../../models/forms/checkoutForm';
import { BaseForm } from '../../../models/baseForm';
import { Order } from '../../../data/order';

@Component({
    templateUrl: './checkout-details.component.html',
})
export class CheckoutDetailsComponent extends BaseForm<CheckoutFormGroup> implements OnInit {
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

    ngOnInit(): void {
        this.form.controls['name'].valueChanges.subscribe((value: string) => {
            if (value.length == 4) {
                let newValue: string = `${value}-`;
                this.form.controls['name'].patchValue(newValue, { emitEvent: true });
            }
            //else {
            //    this.form.controls['name'].patchValue(oldValue, { emitEvent: false });
            //}

            console.log(this.form.controls['name'].value);
        });
    }

    onSubmitForm(): void {
        if (this.form.valid) {
            this._order.name = this.form.get(this._nh.nameof<Order>("name")).value;
            this._order.address = this.form.get(this._nh.nameof<Order>("address")).value;

            this._router.navigateByUrl("/store/payment");
        }
    }
}
