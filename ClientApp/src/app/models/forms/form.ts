import { FormControl, ValidatorFn, FormGroup, AbstractControl } from "@angular/forms";
import { ValidationErrors } from './validationErrors';
import { EntityType } from '../../enums/entityType';
import { ErrorAttributes } from '../../enums/errorAttributes';

export class CustomFormControl extends FormControl {
    constructor(value: string | number | boolean, validator: ValidatorFn | ValidatorFn[],
        label: string, property: string,
        entityType: EntityType, ve: ValidationErrors) {

        super(value, validator);
        this.label = label;
        this.property = property;
        this._entityType = entityType;
        this._ve = ve;
    }

    label: string;
    property: string;
    private _entityType: EntityType;
    private _ve: ValidationErrors;

    getValidationMessages(): Array<string> {
        let messages: Array<string> = new Array<string>();

        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case ErrorAttributes.required:
                        messages.push(this._ve.getValidationErrors(this._entityType,
                            this.property, errorName));
                        break;
                    case ErrorAttributes.minlength:
                        messages.push(this._ve.getValidationErrors(this._entityType,
                            this.property, errorName));
                        break;
                }
            }
        }

        return messages;
    }
}

export class CustomFormGroup extends FormGroup {
    constructor() {
        super({});
    }

    get customControls(): Array<CustomFormControl> {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as CustomFormControl);
    }
}
