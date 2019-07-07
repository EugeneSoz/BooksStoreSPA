import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from '../shared/store.service';
import { BookResponse } from '../../models/domain/DTO/book-response.model';

@Component({
    templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {
    constructor(
        private _storeService: StoreService,
        private _activeRoute: ActivatedRoute) { }

    private _id: number = 0;

    book: BookResponse = null;

    ngOnInit(): void {
        this._id = Number.parseInt(this._activeRoute.snapshot.paramMap.get("id")) || 0;
        this.getBook();
    }

    private getBook(): void {
        this._storeService.getBook(this._id)
            .subscribe(result => this.book = result);
    }
}
