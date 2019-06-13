import { NameOfHelper } from '../../helpers/nameofHelper';
import { Validators } from '@angular/forms';
import { EntityType } from '../../enums/entityType';
import { Order } from '../../data/order';
import { CustomFormGroup, CustomFormControl } from './customFormControl';
import { ModelErrors } from './modelErrors';

export class CheckoutFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, order: Order) {

        super();
        this._me = new ModelErrors();
        this.addControl(nh.nameof<Order>("name"),
            new CustomFormControl(order.name,
                Validators.required,
                "Ваше имя",
                nh.nameof<Order>("name"),
                EntityType.Order,
                this._me));

        this.addControl(nh.nameof<Order>("address"),
            new CustomFormControl(order.address,
                Validators.required,
                "Адрес доставки",
                nh.nameof<Order>("address"),
                EntityType.Order,
                this._me));
    }

    private _me: ModelErrors;
}
