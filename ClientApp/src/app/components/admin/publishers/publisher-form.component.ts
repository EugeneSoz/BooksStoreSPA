import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PublisherService } from '../../../services/publisher.service';
import { Publisher } from '../../../data/publisher';
import { ModelErrors } from '../../../models/forms/modelErrors';
import { EntityType } from '../../../enums/entityType';
import { BaseAdminFormComponent } from '../../../models/forms/baseAdminFormComponent';
import { PublisherDTO } from '../../../data/DTO/publisherDTO';
import { NgForm } from '@angular/forms';
import { PageLink } from '../../../enums/pageLink';

@Component({
    selector: 'app-publisher-form',
    templateUrl: './publisher-form.component.html',
})
export class PublisherFormComponent extends BaseAdminFormComponent implements OnInit {
    constructor(
        private _publisherService: PublisherService,
        activeRoute: ActivatedRoute,
        private _router: Router) {

        super(activeRoute, new ModelErrors(), EntityType.Publisher);
        this.link = `/${PageLink.admin_publishers}`;
    }

    publisher: PublisherDTO = new PublisherDTO();

    get errors(): Array<string> {
        return this._publisherService.errors;
    }

    ngOnInit(): void {
        this._subscriptions.push(
            this._publisherService.entityChanged.subscribe(changed => {
                if (changed) {
                    this.publisher = this._ee.mapPublisherDTO(this._publisherService.entity);
                }
            })
        );
        this._subscriptions.push(
            this._publisherService.entityUpdated.subscribe(updated => {
                if (updated) {
                    this._router.navigateByUrl(PageLink.admin_publishers);
                }
            })
        );

        if (this._id != 0) {
            this._publisherService.getEntity(this._id);
        }
    }

    onSetCountry(value: string): void {
        if (value.length == 4) {
            this.publisher.country = `${value}-`;
        }
    }

    onSubmit(form: NgForm): void {
        //update
        if (form.valid && this.editing) {
            this._publisherService.updateEntity(this.publisher);
        }//create
        else if (form.valid && !this.editing) {
            this._publisherService.createEntity(this.publisher)
            this.isAlertVisible = true;
            this.publisher = new Publisher();
        }

        form.reset();
    }
}
