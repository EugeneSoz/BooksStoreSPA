import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../shared/store.service';
import { Book } from '../../models/domain/book.model';

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

    get book(): Book {
        return this._storeService.book || null;
    }

    ngOnInit(): void {
        this._storeService.getBook(this._id);
    }
}
