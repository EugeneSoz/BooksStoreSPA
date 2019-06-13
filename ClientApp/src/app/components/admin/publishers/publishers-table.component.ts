import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PublisherService } from '../../../services/publisher.service';
import { EntityType } from '../../../enums/entityType';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageLink } from '../../../enums/pageLink';
import { Publisher } from '../../../data/publisher';
import { BaseTable } from '../../../models/baseSelection';
import { PublisherDTO } from '../../../data/DTO/publisherDTO';
import { DeleteMessageComponent } from '../../modals/delete-message.component';
import { EntityExtensions } from '../../../infrastructure/entityExtensions';

@Component({
    templateUrl: './publishers-table.component.html',
})
export class PublishersTableComponent extends BaseTable<Publisher, Publisher, PublisherDTO>
    implements OnInit, OnDestroy {

    constructor(
        publisherService: PublisherService,
        public modalService: BsModalService) {

        super(publisherService, EntityType.Publisher, modalService, `/${PageLink.admin_publishers}`);
    }

    publisherDTO: PublisherDTO = null;
    modalRef: BsModalRef = null;

    onShowDeleteModal(publisher: Publisher): void {
        let ee: EntityExtensions = new EntityExtensions();
        this.publisherDTO = ee.mapPublisherDTO(publisher);
        const initialState = {
            entityType: EntityType.Publisher,
            objectName: publisher.name
        }

        this._subscriptions.push(
            this.modalService.onHide.subscribe((reason: string) => {
                if (this.modalRef != null &&
                    (this.modalRef.content as DeleteMessageComponent).result == "delete") {
                    this._service.deleteEntity(this.publisherDTO);
                }
                this.unsubscribe();
            })
        );

        this._subscriptions.forEach((s, i) => console.log("subscription - " + i.toString()));
        this.modalRef = this.modalService.show(DeleteMessageComponent, { initialState });
    }

    unsubscribe(): void {
        this._subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
        this._subscriptions = new Array<Subscription>();
    }
}
