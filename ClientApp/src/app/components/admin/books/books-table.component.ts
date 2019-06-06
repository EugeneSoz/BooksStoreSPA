import { Component, OnInit, OnDestroy } from '@angular/core';

import { BookService } from '../../../services/book.services';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';
import { PageLink } from '../../../enums/pageLink';
import { Book } from '../../../data/book';
import { BaseTable } from '../../../models/baseSelection';
import { BookResponse } from '../../../data/DTO/bookResponse';

@Component({
    templateUrl: './books-table.component.html',
})
export class BooksTableComponent extends BaseTable<Book, BookResponse>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        super(bookService, EntityType.Book, modalService, `/${PageLink.admin_books}`);

        this.subscription.add(
            deletionService.bookDeleted.subscribe(deletion => {
                let model: Book = deletion.entity as Book;
                bookService.deleteEntity(model);
            }));
    }
}
