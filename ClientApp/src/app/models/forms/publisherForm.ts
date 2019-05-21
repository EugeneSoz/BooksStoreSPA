import { CustomFormGroup, CustomFormControl } from "./form";
import { Validators } from "@angular/forms";

import { NameOfHelper } from "../../helpers/nameofHelper";
import { Publisher } from "../dataDTO/publisher";
import { ValidationErrors } from "./validationErrors";
import { EntityType } from '../../enums/entityType';
import { RangeValidator } from './range.formvalidator';

export class PublisherFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, publisher: Publisher) {

        super();
        this._ve = new ValidationErrors();
        this.addControl(nh.nameof<Publisher>("name"),
            new CustomFormControl(publisher.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название издательства",
                nh.nameof<Publisher>("name"),
                EntityType.Publisher,
                this._ve));

        this.addControl(nh.nameof<Publisher>("country"),
            new CustomFormControl(publisher.country,
                Validators.required,
                "Страна нахождения издательства",
                nh.nameof<Publisher>("country"),
                EntityType.Publisher,
                this._ve));
    }

    private _ve: ValidationErrors;
}
