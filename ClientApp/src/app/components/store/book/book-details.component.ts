import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from '../../../services/store.service';
import { Book } from '../../../models/dataDTO/book';

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

    get book(): Book {
        return this._storeService.book || null;
    }

    ngOnInit(): void {
        this._storeService.getBook(this._id);
    }
}
