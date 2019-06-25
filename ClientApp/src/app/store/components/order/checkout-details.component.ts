import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { CheckoutFormGroup } from '../../../models/forms/checkout-form.model';
import { Order } from '../../../models/domain/order.model';
import { BaseFormComponent } from '../../../core/shared/base-form';
import { nameof } from '../../../core/shared/helper-functions';

@Component({
    templateUrl: './checkout-details.component.html',
})
export class CheckoutDetailsComponent extends BaseFormComponent<CheckoutFormGroup> implements OnInit {
    constructor(
        private _router: Router,
        private _order: Order,
        activeRoute: ActivatedRoute) {

        super();
        this.form = new CheckoutFormGroup(_order);
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
            this._order.name = this.form.get(nameof<Order>("name")).value;
            this._order.address = this.form.get(nameof<Order>("address")).value;

            this._router.navigateByUrl("/store/payment");
        }
    }
}
