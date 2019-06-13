import { Injectable } from '@angular/core';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { Book } from '../data/book';
import { BookResponse } from '../data/DTO/bookResponse';
import { BookDTO } from '../data/DTO/bookDTO';

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
    }
}
