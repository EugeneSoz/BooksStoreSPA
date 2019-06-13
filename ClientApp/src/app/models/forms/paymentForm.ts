import { NameOfHelper } from '../../helpers/nameofHelper';
import { Validators } from '@angular/forms';
import { EntityType } from '../../enums/entityType';
import { Payment, Order } from '../../data/order';
import { ModelErrors } from './modelErrors';
import { CustomFormGroup, CustomFormControl } from './customFormControl';

export class PaymentFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, order: Order) {

        super();
        this._me = new ModelErrors();
        this.addControl(nh.nameof<Payment>("cardNumber"),
            new CustomFormControl(order.payment.cardNumber,
                Validators.required,
                "Номер банковской карты",
                nh.nameof<Payment>("cardNumber"),
                EntityType.Order,
                this._me));

        this.addControl(nh.nameof<Payment>("cardExpiry"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.required,
                "Укажите срок действий карты",
                nh.nameof<Payment>("cardExpiry"),
                EntityType.Order,
                this._me));

        this.addControl(nh.nameof<Payment>("cardSecurityCode"),
            new CustomFormControl(order.payment.cardExpiry,
                Validators.required,
                "Код безопасности карты",
                nh.nameof<Payment>("cardSecurityCode"),
                EntityType.Order,
                this._me));
    }

    private _me: ModelErrors;
}
