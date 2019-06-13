import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { BaseFormComponent } from './baseFormComponent';
import { EntityExtensions } from '../../infrastructure/entityExtensions';

export class BaseAdminFormComponent<TFormGroup extends FormGroup> extends BaseFormComponent<TFormGroup>
    implements OnDestroy {
    constructor(
        activeRoute: ActivatedRoute) {

        super();

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this._id = Number.parseInt(activeRoute.snapshot.params["id"]) || 0;
    }

    protected _id: number = 0;
    protected _ee: EntityExtensions = new EntityExtensions();
    link: string; 

    editing: boolean = false;
    isAlertVisible: boolean = false;

    protected _subscriptions: Array<Subscription> = new Array<Subscription>();
    get title(): string {
        return this.editing ? "Редактировать" : "Создать";
    }

    get background(): string {
        return this.editing ? "btn btn-warning" : "btn btn-primary";
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
