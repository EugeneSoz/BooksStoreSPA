import { Injectable } from '@angular/core';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { Book } from '../data/book';
import { BookResponse } from '../data/DTO/bookResponse';
import { BookDTO } from '../data/DTO/bookDTO';
import { Publisher } from '../data/publisher';
import { QueryOptions } from '../data/DTO/queryOptions';
import { Observable } from 'rxjs';

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
    }

    private publishersUrl: string = null;

    searchSelectablePublishers(searchTerm: string): Observable<Array<Publisher>> {
        let options: QueryOptions = new QueryOptions();
        options.resetToDefault();
        options.searchTerm = searchTerm;
        options.searchPropertyNames = new Array<string>("name");
        options.pageSize = 10;

        return this._rest.receiveAll<Array<Publisher>, QueryOptions>(this.publishersUrl, options);
    }
}
