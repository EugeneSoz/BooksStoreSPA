import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Publisher } from '../../../models/dataDTO/publisher';
import { PublisherService } from '../../../services/publisher.service';
import { PublisherFormGroup } from '../../../models/forms/publisherForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { Entity_Changed, EntityEventArgs } from '../../../models/events/entityEventArgs';
import { BaseForm } from '../../../viewModels/baseForm';

@Component({
    selector: 'app-publisher-form',
    templateUrl: './publisher-form.component.html',
    providers: [PublisherService]
})
export class PublisherFormComponent extends BaseForm<PublisherFormGroup> implements OnInit {
    constructor(
        private _publisherService: PublisherService,
        private _nh: NameOfHelper,
        @Inject(Entity_Changed) private entityChanged: Observable<EntityEventArgs>,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new PublisherFormGroup(this._nh, this.publisher);
        this.entityChanged.subscribe(changed => {
            if (changed) {
                Object.assign(this.publisher, _publisherService.entity);
                this.form = new PublisherFormGroup(this._nh, this.publisher);
            }
        });
    }

    publisher: Publisher = new Publisher();

    get errors(): Array<string> {
        return this._publisherService.errors;
    }

    ngOnInit(): void {
        if (this._id != null) {
            this._publisherService.getEntity(this._id);
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
