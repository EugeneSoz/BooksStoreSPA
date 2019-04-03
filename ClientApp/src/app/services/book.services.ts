import { Injectable, Inject } from '@angular/core';
import { Observer } from 'rxjs';

import { BaseAdminService } from './baseAdmin.service';
import { RestDatasource } from '../helpers/restDatasource';
import { Urls } from '../helpers/urls';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { Entity_Changed, EntityEventArgs } from '../models/events/entityEventArgs';

@Injectable()
export class BookService extends BaseAdminService<BookResponse, BookResponse> {

    constructor(
        urls: Urls,
        rest: RestDatasource,
        @Inject(Entity_Changed) entityChanged: Observer<EntityEventArgs>) {

        super(rest, entityChanged);
        this.getAllUrl = urls.books;
        this.getOneUrl = urls.book;
    }
}
