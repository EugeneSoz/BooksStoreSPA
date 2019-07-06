import { Injectable } from "@angular/core";

import { QueryOptions } from '../../models/domain/DTO/query-options.model';
import { Book } from '../../models/domain/book.model';
import { BookResponse } from '../../models/domain/DTO/book-response.model';
import { Pagination } from '../../models/pagination.model';
import { Url } from '../../models/url.model';
import { PagedResponse } from '../../models/paged-response.model';
import { RestDatasource } from '../../core/rest-datasource.service';
import { StoreCategoryResponse } from '../../models/domain/DTO/store-category-response.model';
import { Observable, of, Subject } from 'rxjs';
import { Dropdown } from '../../models/domain/DTO/dropdown.model';
import { map, shareReplay } from 'rxjs/operators';

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

    book: Book = null;
    private _booksChanged: Subject<void> = new Subject<void>();
    get booksChanged(): Observable<void> {
        return this._booksChanged.asObservable();
    }

    pagination: Pagination = null;
    pageNumbers: Array<number>;

    sortPropertyName: string;
    searchTerm: string = null;

    private _receivedFromServerBooksCount: number = 0;
    get cardsCountInRow(): number {
        return this._cardsCountInRow;
    }

    set cardsCountInRow(value: number) {
        this.setBooksRowsAndCol(value);
    }

    getCategories(): Observable<Array<StoreCategoryResponse>> {
        return this._rest.getAll<Array<StoreCategoryResponse>>(Url.storeCategories);
    }

    getBooks(): Observable<PagedResponse<BookResponse>> {
        return this._rest.receiveAll<PagedResponse<BookResponse>, QueryOptions>(Url.books,
            this._queryOptions)
            .pipe(map(response => {
                this._receivedFromServerBooksCount = response.entities.length;
                this.setBooksRowsAndCol(this._cardsCountInRow);

                return response;
            }));
    }

    getBook(id: number): Observable<BookResponse> {
        return this._rest.getOne<BookResponse>(`${Url.book}/${id}`);
    }

    changeBooksGridSize(cardsCountInRow: number): void {
        this.cardsCountInRow = cardsCountInRow;
    }

    changePage(newPage: number): void {
        this._queryOptions.currentPage = newPage;
        this._booksChanged.next();
    }

    filterBy(filterPropertyName: string, filterPropertyValue: number): void {
        this._queryOptions.currentPage = 1;
        this._queryOptions.filterPropertyName = filterPropertyName;
        this._queryOptions.filterPropertyValue = filterPropertyValue;

        this._booksChanged.next();
    }

    search(options: QueryOptions): void {
        this._queryOptions.currentPage = 1;
        this._queryOptions.searchPropertyNames = options.searchPropertyNames;
        this._queryOptions.searchTerm = options.searchTerm;
        this.searchTerm = options.searchTerm;

        this._booksChanged.next();
    }

    sort(options: QueryOptions): void {
        this._queryOptions.sortPropertyName = options.sortPropertyName;
        this._queryOptions.descendingOrder = options.descendingOrder;
        this.sortPropertyName = options.sortPropertyName;

        this._booksChanged.next();
    }

    //св-ва для выпадающих меню
    getDropdownProps(): Observable<Dropdown> {
        return this._rest.getOne<Dropdown>(Url.dropdown);
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
        this.displayedBooksCount = this._receivedFromServerBooksCount;// this.books != null ? this.books.length : 0;
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
