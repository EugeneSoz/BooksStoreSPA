import { CustomFormGroup, CustomFormControl } from './form';
import { NameOfHelper } from '../../helpers/nameofHelper';
import { ValidationErrors } from "./validationErrors";
import { Validators } from '@angular/forms';
import { EntityType } from '../../enums/entityType';
import { Order } from '../../data/order';

export class CheckoutFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, order: Order) {

        super();
        this._ve = new ValidationErrors();
        this.addControl(nh.nameof<Order>("name"),
            new CustomFormControl(order.name,
                Validators.required,
                "Ваше имя",
                nh.nameof<Order>("name"),
                EntityType.Order,
                this._ve));

        this.addControl(nh.nameof<Order>("address"),
            new CustomFormControl(order.address,
                Validators.required,
                "Адрес доставки",
                nh.nameof<Order>("address"),
                EntityType.Order,
                this._ve));
    }

    private _ve: ValidationErrors;
}
