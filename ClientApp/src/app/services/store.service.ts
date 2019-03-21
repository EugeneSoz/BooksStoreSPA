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

    _cardsCountInRow: number = 4;
    //общее кол-во отображаемых книг на странице
    displayedBooksCount: number
    //кол-во строк отображаемых книг на странице
    rows: Array<number> = new Array<number>();
    cols: Array<number> = new Array<number>();

    queryOptions: QueryOptions = null;
    categories: Array<Category> = null;
    book: BookResponse = null;
    books: PagedResponse<BookResponse> = null;

    get cardsCountInRow(): number {
        return this._cardsCountInRow;
    }

    set cardsCountInRow(value: number) {
        this.setBooksRowsAndCol(value);
    }

    getCategories(): void {
        this._rest.getAll<Array<Category>>(this._urls.storeCategories)
            .subscribe(response => {
                this.categories = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    getBooks(): void {
        this._rest.receiveAll<PagedResponse<BookResponse>>(this._urls.books, this.queryOptions)
            .subscribe(response => {
                this.books = this._rest.getResponseBody(response, HttpMethod.POSTGET);
                this.setBooksRowsAndCol(this._cardsCountInRow);
            });
    }

    getBook(id: number): void {
        this._rest.getAll<BookResponse>(`${this._urls.book}/${id}`)
            .subscribe(response => {
                this.book = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    changeBooksGridSize(cardsCountInRow: number): void {
        this.cardsCountInRow = cardsCountInRow;
    }

    private setBooksRowsAndCol(cardsCountInRow: number) {
        this.cols = new Array<number>();
        this.rows = new Array<number>();

        this._cardsCountInRow = cardsCountInRow;
        this.displayedBooksCount = this.books != null ? this.books.entities.length : 0;
        for (let i = 0; i < cardsCountInRow; i++)
        {
            this.cols.push(i);
        }
        let row: number = Math.ceil(this.displayedBooksCount / this.cardsCountInRow);
        for (let i = 0; i < row; i++)
        {
            this.rows.push(i);
        }
    }
}
