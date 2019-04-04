import { Injectable, Inject } from '@angular/core';
import { Observer } from 'rxjs';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { Book } from '../models/dataDTO/book';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { Entity_Changed, EntityEventArgs } from '../models/events/entityEventArgs';

@Injectable()
export class BookService extends BaseAdminService<Book, BookResponse> {

    constructor(
        urls: Urls,
        rest: RestDatasource,
        @Inject(Entity_Changed) entityChanged: Observer<EntityEventArgs>) {

        super(rest, entityChanged);
        this.getAllUrl = urls.books;
        this.getOneUrl = urls.book;
        this.createUrl = urls.book_create;
        this.updateUrl = urls.book_update;
        this.deleteUrl = urls.book_delete;
    }
}
