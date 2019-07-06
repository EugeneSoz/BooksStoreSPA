import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from '../shared/store.service';
import { Subscription } from 'rxjs';
import { BookResponse } from '../../models/domain/DTO/book-response.model';

@Component({
    templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit
{
    constructor(
        private _storeService: StoreService,
        activeRoute: ActivatedRoute) {

        this._id = activeRoute.snapshot.params["id"];
    }

    private _id: number = 0;

    book: BookResponse = null;

    ngOnInit(): void {
        this.getBook();
    }

    private getBook(): void {
        this._storeService.getBook(this._id)
            .subscribe(result => {
                this.book = result;
        });
    }
}
