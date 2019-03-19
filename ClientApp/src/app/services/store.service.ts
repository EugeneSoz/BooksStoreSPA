import { Injectable } from "@angular/core";

import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { QueryOptions } from '../models/dataDTO/queryOptions';
import { Category } from '../models/dataDTO/category';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { PagedResponse } from '../models/dataDTO/pagedResponse';
import { HttpMethod } from '../enums/httpMethods';

@Injectable()
export class StoreService {
    constructor(
        private _urls: Urls,
        private _rest: RestDatasource) {

        this.queryOptions = new QueryOptions();
        this.queryOptions.resetToDefault();
    }

    queryOptions: QueryOptions = null;
    categories: Array<Category> = null;
    book: BookResponse = null;
    books: PagedResponse<BookResponse> = null;
    cardsCountInRow: number = 4;

    getCategories(): void {
        this._rest.getAll<Array<Category>>(this._urls.storeCategories)
            .subscribe(response => {
                this.categories = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    getBooksAsync(): void {
        this._rest.receiveAll<PagedResponse<BookResponse>>(this._urls.books, this.queryOptions)
            .subscribe(response => {
                this.books = this._rest.getResponseBody(response, HttpMethod.POSTGET);
            });
    }

    getBookAsync(id: number): void {
        this._rest.getAll<BookResponse>(`${this._urls.book}/${id}`)
            .subscribe(response => {
                this.book = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    changeBooksGridSize(cardsCountInRow: number): void {
        this.cardsCountInRow = cardsCountInRow;
    }
}
