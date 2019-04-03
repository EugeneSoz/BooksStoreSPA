import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookResponse } from '../../../models/dataDTO/bookResponse';
import { StoreService } from '../../../services/store.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit
{
    constructor(
        private _storeService: StoreService,
        activeRoute: ActivatedRoute) {

        this._id = activeRoute.snapshot.params["id"];
    }

    private _id: number = 0;

    get book(): BookResponse {
        return this._storeService.book || null;
    }

    ngOnInit(): void {
        this._storeService.getBook(this._id);
    }
}
