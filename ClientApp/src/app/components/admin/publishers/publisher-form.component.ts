import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Publisher } from '../../../models/dataDTO/publisher';
import { PublisherService } from '../../../services/publisher.service';
import { PublisherFormGroup } from '../../../models/forms/publisherForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
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
        activeRoute: ActivatedRoute,
        private _router: Router) {

        super(activeRoute);
        this.form = new PublisherFormGroup(this._nh, this.publisher);
    }

    publisher: Publisher = new Publisher();

    get errors(): Array<string> {
        return this._publisherService.errors;
    }

    ngOnInit(): void {
        this._subscription.add(
            this._publisherService.entityChanged.subscribe(changed => {
                if (changed) {
                    Object.assign(this.publisher, this._publisherService.entity);
                    this.form = new PublisherFormGroup(this._nh, this.publisher);
                }
            }));
        if (this._id != null) {
            this._publisherService.getEntity(this._id);
        }
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.publisher.name = this.form.get(this._nh.nameof<Publisher>("name")).value;
            this.publisher.country = this.form.get(this._nh.nameof<Publisher>("country")).value;

            if (this.editing) {
                this._publisherService.updateEntity(this.publisher);
            }
            else {
                this._publisherService.createEntity(this.publisher)
            }
            this.publisher = new Publisher();
            if (this.editing) {
                this._router.navigateByUrl("admin/publishers");
            }
            this.isAlertVisible = true;
            this.form.reset();
        }
    }
}
