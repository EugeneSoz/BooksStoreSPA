import { Validators } from '@angular/forms';

import { CustomFormGroup, CustomFormControl } from './custom-form-control.model';
import { Order, Payment } from '../domain/order.model';
import { ModelErrors } from '../validation/model-errors.model';
import { EntityType } from '../enums/entity-type.enum';
import { nameof } from '../../core/shared/helper-functions';

export class PaymentFormGroup extends CustomFormGroup {
    constructor(
        order: Order) {

        super();
        this._me = new ModelErrors();
        this.addControl(nameof<Payment>("cardNumber"),
            new CustomFormControl(order.payment.cardNumber,
                Validators.required,
                "Номер банковской карты",
                nameof<Payment>("cardNumber"),
                EntityType.Order,
                this._me));

        this.addControl(nameof<Payment>("cardExpiry"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.required,
                "Укажите срок действий карты",
                nameof<Payment>("cardExpiry"),
                EntityType.Order,
                this._me));

        this.addControl(nameof<Payment>("cardSecurityCode"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.required,
                "Код безопасности карты",
                nameof<Payment>("cardSecurityCode"),
                EntityType.Order,
                this._me));
    }

    private _me: ModelErrors;
}
