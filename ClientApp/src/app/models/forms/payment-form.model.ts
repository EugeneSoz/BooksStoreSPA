import { Validators } from '@angular/forms';

import { CustomFormGroup, CustomFormControl } from './custom-form-control.model';
import { Order } from '../domain/order.model';
import { ModelErrors } from '../validation/model-errors.model';
import { EntityType } from '../enums/entity-type.enum';
import { nameof } from '../../core/helper-functions';
import { Payment } from '../payment.model';

export class PaymentFormGroup extends CustomFormGroup {
    constructor(
        order: Order) {

        super();
        let cardNumberRegExp: RegExp = new RegExp("^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$");
        let cardExpiryRegExp: RegExp = new RegExp("^[0-9]{2}/[0-9]{2}$");
        let securityCodeRegExp: RegExp = new RegExp("^[0-9]{3}$");
        this._me = new ModelErrors();
        this.addControl(nameof<Payment>("cardNumber"),
            new CustomFormControl(order.payment.cardNumber,
                Validators.compose([Validators.required, Validators.pattern(cardNumberRegExp)]),
                "Номер банковской карты",
                nameof<Payment>("cardNumber"),
                EntityType.Order,
                this._me));

        this.addControl(nameof<Payment>("cardExpiry"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.compose([Validators.required, Validators.pattern(cardExpiryRegExp)]),
                "Укажите срок действий карты",
                nameof<Payment>("cardExpiry"),
                EntityType.Order,
                this._me));

        this.addControl(nameof<Payment>("cardSecurityCode"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.compose([Validators.required, Validators.pattern(securityCodeRegExp)]),
                "Код безопасности карты",
                nameof<Payment>("cardSecurityCode"),
                EntityType.Order,
                this._me));
    }

    private _me: ModelErrors;
}
