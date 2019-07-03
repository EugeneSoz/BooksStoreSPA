import { Injectable } from "@angular/core";

import { QueryOptions } from '../../models/domain/DTO/query-options.model';
import { Category } from '../../models/domain/category.model';
import { Book } from '../../models/domain/book.model';
import { BookResponse } from '../../models/domain/DTO/book-response.model';
import { Pagination } from '../../models/pagination.model';
import { Url } from '../../models/url.model';
import { PagedResponse } from '../../models/paged-response.model';
import { RestDatasource } from '../../core/rest-datasource.service';

@Injectable()
export class StoreService {
    constructor(
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
    books: Array<BookResponse> = null;

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

    getCategories(): void {
        this._rest.getAll<Array<Category>>(Url.storeCategories)
            .subscribe(result => {
                this.categories = result;
            });
    }

    getBooks(): void {
        this._rest.receiveAll<PagedResponse<BookResponse>, QueryOptions>(Url.books, this._queryOptions)
            .subscribe(result => {
                this.books = result.entities;
                this.pagination = result.pagination;
                this.pageNumbers = result.pageNumbers;
                this.setBooksRowsAndCol(this._cardsCountInRow);
            });
    }

    getBook(id: number): void {
        this._rest.getAll<Book>(`${Url.book}/${id}`)
            .subscribe(result => {
                this.book = result;
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

    //login(name: string, password: string): void {
    //    this._rest.createObject<{}, void>(this._urls.login, { name: name, password: password });
    //}

    //logout(): void {
    //    this._rest.createObject<{}, void>(this._urls.logout, null)
    //        .subscribe(response => { });
    //}

    private setBooksRowsAndCol(cardsCountInRow: number) {
        this.cols = new Array<number>();
        this.rows = new Array<number>();

        this._cardsCountInRow = cardsCountInRow;
        this.displayedBooksCount = this.books != null ? this.books.length : 0;
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
