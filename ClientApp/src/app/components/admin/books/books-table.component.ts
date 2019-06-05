import { Component, OnInit, OnDestroy } from '@angular/core';

import { BaseTable } from '../../../viewModels/baseSelection';
import { BookResponse } from '../../../models/dataDTO/bookResponse';
import { BookService } from '../../../services/book.services';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { Book } from '../../../models/dataDTO/book';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';
import { PageLink } from '../../../enums/pageLink';

@Component({
    templateUrl: './books-table.component.html',
})
export class BooksTableComponent extends BaseTable<Book, BookResponse>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        let fprop = (new FilterProperties()).getBooksProp();
        let sprop = (new SortingProperties()).getBooksProp();
        super(bookService, fprop, sprop, EntityType.Book, modalService);

        this.subscription.add(
            deletionService.bookDeleted.subscribe(deletion => {
                let model: Book = deletion.entity as Book;
                bookService.deleteEntity(model);
            }));

        this.link = `/${PageLink.admin_books}`;
    }

    link: string;
}
