import { Injectable } from '@angular/core';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { PagedResponse } from '../models/dataDTO/pagedResponse';

@Injectable()
export class BookService extends BaseAdminService<BookResponse, BookResponse> {

    constructor(
        urls: Urls,
        rest: RestDatasource) {

        super(rest);
        this.getAllUrl = urls.books;
        this.getOneUrl = urls.book;
    }
}
