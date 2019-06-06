import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublisherService } from '../../../services/publisher.service';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';
import { PageLink } from '../../../enums/pageLink';
import { Publisher } from '../../../data/publisher';
import { BaseTable } from '../../../models/baseSelection';

@Component({
    templateUrl: './publishers-table.component.html',
})
export class PublishersTableComponent extends BaseTable<Publisher, Publisher>
    implements OnInit, OnDestroy {

    constructor(
        publisherService: PublisherService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        super(publisherService, EntityType.Publisher, modalService, `/${PageLink.admin_publishers}`);

        this.subscription.add(
            deletionService.publisherDeleted.subscribe(deletion => {
                let model: Publisher = deletion.entity as Publisher;
                publisherService.deleteEntity(model);
            }));
    }
}
