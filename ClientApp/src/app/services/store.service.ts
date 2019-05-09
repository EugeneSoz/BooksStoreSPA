import { Injectable } from "@angular/core";

import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { QueryOptions } from '../models/dataDTO/queryOptions';
import { Category } from '../models/dataDTO/category';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { PagedResponse } from '../models/dataDTO/pagedResponse';
import { HttpMethod } from '../enums/httpMethods';
import { Pagination } from "../models/pagination";
import { Book } from '../models/dataDTO/book';

@Injectable()
export class StoreService {
    constructor(
        private _urls: Urls,
        private _rest: RestDatasource) {

        this._queryOptions = new QueryOptions();
        this._queryOptions.resetToDefault();
    }

    private _cardsCountInRow: number = 4;
    private _queryOptions: QueryOptions = null;

    //общее кол-во отображаемых книг на странице
    displayedBooksCount: number
    //кол-во строк отображаемых книг на странице
    rows: Array<number> = new Array<number>();
    cols: Array<number> = new Array<number>();

    categories: Array<Category> = null;
    book: Book = null;
    _books: PagedResponse<BookResponse> = null;

    pagination: Pagination = null;
    pageNumbers: Array<number>;

    sortPropertyName: string;
    searchTerm: string = null;

    get cardsCountInRow(): number {
        return this._cardsCountInRow;
    }

    set cardsCountInRow(value: number) {
        this.setBooksRowsAndCol(value);
    }

    get books(): PagedResponse<BookResponse> {
        return this._books;
    }

    set books(value: PagedResponse<BookResponse>) {
        if (value != undefined || value != null) {
            this._books = value;
            //создать класс Pagination
            this.pagination = new Pagination(value.currentPage, value.pageSize, value.totalPages,
                value.hasPreviousPage, value.hasNextPage, value.leftBoundary, value.rightBoundary);
            //создать массив из которого будет строиться компонент Pagination
            let array: Array<number> = new Array<number>();

            for (let i = this.pagination.leftBoundary; i <= this.pagination.rightBoundary; i++) {
                array.push(i);
            }

            this.pageNumbers = array;
        }
    }

    getCategories(): void {
        this._rest.getAll<Array<Category>>(this._urls.storeCategories)
            .subscribe(response => {
                this.categories = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    getBooks(): void {
        this._rest.receiveAll<PagedResponse<BookResponse>>(this._urls.books, this._queryOptions)
            .subscribe(response => {
                this.books = this._rest.getResponseBody(response, HttpMethod.POSTGET);
                this.setBooksRowsAndCol(this._cardsCountInRow);
            });
    }

    getBook(id: number): void {
        this._rest.getAll<Book>(`${this._urls.book}/${id}`)
            .subscribe(response => {
                this.book = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }

    changeBooksGridSize(cardsCountInRow: number): void {
        this.cardsCountInRow = cardsCountInRow;
    }

    changePage(newPage: number): void {
        this._queryOptions.currentPage = newPage;
        this.getBooks();
    }

    filterBy(filterPropertyName: string, filterPropertyValue: number): void {
        this._queryOptions.currentPage = 1;
        this._queryOptions.filterPropertyName = filterPropertyName;
        this._queryOptions.filterPropertyValue = filterPropertyValue;

        this.getBooks();
    }

    search(options: QueryOptions): void {
        this._queryOptions.currentPage = 1;
        this._queryOptions.searchPropertyNames = options.searchPropertyNames;
        this._queryOptions.searchTerm = options.searchTerm;
        this.searchTerm = options.searchTerm;

        this.getBooks();
    }

    sort(options: QueryOptions): void {
        this._queryOptions.sortPropertyName = options.sortPropertyName;
        this._queryOptions.descendingOrder = options.descendingOrder;
        this.sortPropertyName = options.sortPropertyName;

        this.getBooks();
    }

    login(name: string, password: string): void {
        this._rest.createObject<{}, void>(this._urls.login, { name: name, password: password });
    }

    logout(): void {
        this._rest.createObject<{}, void>(this._urls.logout, null)
            .subscribe(response => { });
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
