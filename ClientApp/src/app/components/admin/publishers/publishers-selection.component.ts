import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';
import { PagedResponse } from '../../../models/dataDTO/pagedResponse';
import { Publisher } from '../../../models/dataDTO/publisher';
import { Pagination } from '../../../models/pagination';

@Component({
    selector: 'publishers-selection',
    templateUrl: './publishers-selection.component.html',
})
export class PublishersSelectionComponent implements OnInit {

    constructor(
        private _publisherService: PublisherService) { }

    get publishers(): PagedResponse<Publisher> {
        return this._publisherService.entities || null;
    }

    get pagination(): Pagination {
        return this._publisherService.pagination;
    }

    ngOnInit(): void {
        this._publisherService.getEntities();
    }

    onChangePage(newPage: number) {
        this._publisherService.queryOptions.currentPage = newPage;
        this._publisherService.getEntities();
    }
}
