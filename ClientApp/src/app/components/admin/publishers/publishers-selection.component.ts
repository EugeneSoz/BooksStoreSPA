import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublisherService } from '../../../services/publisher.service';
import { Publisher } from '../../../models/dataDTO/publisher';
import { BaseSelection } from '../../../viewModels/baseSelection';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';

@Component({
    selector: 'publishers-selection',
    templateUrl: './publishers-selection.component.html',
    providers: [PublisherService]
})
export class PublishersSelectionComponent extends BaseSelection<Publisher, Publisher>
    implements OnInit, OnDestroy {

    constructor(
        publisherService: PublisherService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        let fprop = (new FilterProperties()).getPublishersProp();
        let sprop = (new SortingProperties()).getPublishersProp();
        super(publisherService, fprop, sprop, EntityType.Publisher, modalService);

        this.subscription.add(
            deletionService.publisherDeleted.subscribe(deletion => {
                let model: Publisher = deletion.entity as Publisher;
                publisherService.deleteEntity(model);
            }));
    }
}
