import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { OnDestroy } from '@angular/core';
import { CustomFormControl } from './forms/customFormControl';

export class BaseForm<TFormGroup extends FormGroup> implements OnDestroy {
    constructor(
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this._id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    protected _id: number = 0;

    editing: boolean = false;
    form: TFormGroup = null;
    isAlertVisible: boolean = false;

    protected _subscription: Subscription = new Subscription();
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

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}