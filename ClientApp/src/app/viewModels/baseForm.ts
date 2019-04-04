import { ActivatedRoute } from '@angular/router';
import { CustomFormControl } from '../models/forms/form';
import { FormGroup } from '@angular/forms';

export class BaseForm<TFormGroup extends FormGroup> {
    constructor(
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this._id = activeRoute.snapshot.params["id"];
    }

    protected _id: number = 0;

    editing: boolean = false;
    form: TFormGroup = null;

    get title(): string {
        return this.editing ? "Редактировать" : "Создать";
    }

    get background(): string {
        return this.editing ? "btn btn-warning" : "btn btn-primary";
    }

    getErrors(property: string): Array<string> {
        if (this.form.controls[property].dirty && this.form.controls[property].invalid) {
            return (this.form.controls[property] as CustomFormControl).getValidationMessages();
        }
        else {
            return null;
        }
    }
}
