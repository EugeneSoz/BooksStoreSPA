import { Validators } from "@angular/forms";

import { NameOfHelper } from "../../helpers/nameofHelper";
import { ValidationErrors } from "./validationErrors";
import { EntityType } from '../../enums/entityType';
import { RangeValidator } from './range.formvalidator';
import { Publisher } from '../../data/publisher';
import { CustomFormGroup, CustomFormControl } from './customFormControl';

export class PublisherFormGroup extends CustomFormGroup {
    constructor(
        publisher: Publisher) {

        super();

        this._nh = new NameOfHelper();
        this._ve = new ValidationErrors();
        this.addControl(this._nh.nameof<Publisher>("name"),
            new CustomFormControl(publisher.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название издательства",
                this._nh.nameof<Publisher>("name"),
                EntityType.Publisher,
                this._ve));

        this.addControl(this._nh.nameof<Publisher>("country"),
            new CustomFormControl(publisher.country,
                Validators.required,
                "Страна нахождения издательства",
                this._nh.nameof<Publisher>("country"),
                EntityType.Publisher,
                this._ve));
    }

    private _ve: ValidationErrors;
    private _nh: NameOfHelper;
}
