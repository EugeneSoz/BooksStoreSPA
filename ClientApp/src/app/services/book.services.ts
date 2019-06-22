import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { Book } from '../data/book';
import { BookResponse } from '../data/DTO/bookResponse';
import { BookDTO } from '../data/DTO/bookDTO';
import { Publisher } from '../data/publisher';
import { SearchTerm } from '../data/DTO/searchTerm';
import { CategoryResponse } from '../data/DTO/categoryResponse';

@Injectable()
export class BookService extends BaseAdminService<Book, BookResponse, BookDTO> {

    constructor(
        urls: Urls,
        rest: RestDatasource) {

        super(rest);
        this.getAllUrl = urls.books;
        this.getOneUrl = urls.book;
        this.createUrl = urls.book_create;
        this.updateUrl = urls.book_update;
        this.deleteUrl = urls.book_delete;
        this.fitlerPropUrl = urls.book_filter;
        this.sortingPropUrl = urls.book_sorting;
        this.publishersUrl = urls.publishersForSelection;
        this.categoriesUrl = urls.categoriesForSelection;
    }

    //для получения с сервера значений для выбора при создании (или редактировании) книги
    private publishersUrl: string = null;
    private categoriesUrl: string = null;

    searchSelectablePublishers(searchTerm: string): Observable<Array<Publisher>> {
        let term: SearchTerm = new SearchTerm(searchTerm);

        return this._rest.receiveAll<Array<Publisher>, SearchTerm>(this.publishersUrl, term);
    }

    searchSelectableCategories(searchTerm: string): Observable<Array<CategoryResponse>> {
        let term: SearchTerm = new SearchTerm(searchTerm);

        return this._rest.receiveAll<Array<CategoryResponse>, SearchTerm>(this.categoriesUrl, term);
    }
}
