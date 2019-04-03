import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Publisher } from '../../../models/dataDTO/publisher';
import { PublisherService } from '../../../services/publisher.service';
import { PublisherFormGroup } from '../../../models/forms/publisherForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { CustomFormControl } from '../../../models/forms/form';
import { Entity_Changed, EntityEventArgs } from '../../../models/events/entityEventArgs';

@Component({
    selector: 'app-publisher-form',
    templateUrl: './publisher-form.component.html',
    providers: [PublisherService]
})
export class PublisherFormComponent implements OnInit {
    constructor(
        private _publisherService: PublisherService,
        private _nh: NameOfHelper,
        @Inject(Entity_Changed) private entityChanged: Observable<EntityEventArgs>,
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this._id = activeRoute.snapshot.params["id"];

        this.entityChanged.subscribe(changed => {
            if (changed) {
                this.form = new PublisherFormGroup(this._nh, this.publisher);
            }
        });
    }

    private _id: number = 0;

    editing: boolean = false;
    form: PublisherFormGroup = new PublisherFormGroup(this._nh, this.publisher);

    get title(): string {
        return this.editing ? "Редактировать" : "Создать";
    }

    get publisher(): Publisher {
        return this._publisherService.entity || new Publisher();
    }

    ngOnInit(): void {
        if (this._id != null) {
            this._publisherService.getEntity(this._id);
        }
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
