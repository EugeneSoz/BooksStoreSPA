import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Publisher } from '../../../models/dataDTO/publisher';
import { PublisherService } from '../../../services/publisher.service';
import { PublisherFormGroup } from '../../../models/forms/publisherForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { CustomFormControl } from '../../../models/forms/form';
import { Entity_Changed, EntityEventArgs } from '../../../models/events/entityEventArgs';
import { NgForm } from '@angular/forms';
import { fillProperties } from '@angular/core/src/util/property';
import { PublicTestability } from '@angular/core/src/testability/testability';

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
                Object.assign(this.publisher, _publisherService.entity);
                this.form = new PublisherFormGroup(this._nh, this.publisher);
            }
        });
    }

    private _id: number = 0;

    editing: boolean = false;
    publisher: Publisher = new Publisher();
    form: PublisherFormGroup = new PublisherFormGroup(this._nh, this.publisher);

    get title(): string {
        return this.editing ? "Редактировать" : "Создать";
    }

    get background(): string {
        return this.editing ? "btn btn-warning" : "btn btn-primary";
    }

    get errors(): Array<string> {
        return this._publisherService.errors;
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

    submitForm(): void {
        if (this.form.valid) {
            this.publisher.name = "";// this.form.get(this._nh.nameof<Publisher>("name")).value;
            this.publisher.country = "";// this.form.get(this._nh.nameof<Publisher>("country")).value;

            if (this.editing) {
                this._publisherService.updateEntity(this.publisher);
            }
            else {
                this._publisherService.createEntity(this.publisher)
            }
            this.form.reset();
        }
    }
}
