import { Component, OnInit, OnDestroy } from '@angular/core';

import { BookService } from '../../../services/book.services';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageLink } from '../../../enums/pageLink';
import { Book } from '../../../data/book';
import { BaseTable } from '../../../models/baseSelection';
import { BookResponse } from '../../../data/DTO/bookResponse';
import { BookDTO } from '../../../data/DTO/bookDTO';

@Component({
    templateUrl: './books-table.component.html',
})
export class BooksTableComponent extends BaseTable<Book, BookResponse, BookDTO>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService,
        modalService: BsModalService) {

        super(bookService, EntityType.Book, modalService, `/${PageLink.admin_books}`);
    }
}
