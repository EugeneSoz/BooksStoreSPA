import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublisherService } from '../../../services/publisher.service';
import { Publisher } from '../../../models/dataDTO/publisher';
import { BaseSelection } from '../../../viewModels/baseSelection';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';

@Component({
    selector: 'publishers-selection',
    templateUrl: './publishers-selection.component.html',
    providers: [PublisherService]
})
export class PublishersSelectionComponent extends BaseSelection<Publisher, Publisher>
    implements OnInit, OnDestroy {

    constructor(
        publisherService: PublisherService) {

        let fprop = (new FilterProperties()).getPublishersProp();
        let sprop = (new SortingProperties()).getPublishersProp();
        super(publisherService, fprop, sprop);
    }
}
