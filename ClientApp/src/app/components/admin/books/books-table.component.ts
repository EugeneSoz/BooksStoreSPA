import { Component, OnInit, OnDestroy } from '@angular/core';

import { BaseTable } from '../../../viewModels/baseSelection';
import { BookResponse } from '../../../models/dataDTO/bookResponse';
import { BookService } from '../../../services/book.services';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { Book } from '../../../models/dataDTO/book';
import { EntityType } from '../../../enums/entityType';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    templateUrl: './books-table.component.html',
})
export class BooksTableComponent extends BaseTable<Book, BookResponse>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService,
        modalService: BsModalService) {

        let fprop = (new FilterProperties()).getBooksProp();
        let sprop = (new SortingProperties()).getBooksProp();
        super(bookService, fprop, sprop, EntityType.Book, modalService);
    }
}
