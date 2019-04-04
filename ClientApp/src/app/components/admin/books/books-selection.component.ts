import { Component, OnInit, OnDestroy } from '@angular/core';

import { BaseSelection } from '../../../viewModels/baseSelection';
import { BookResponse } from '../../../models/dataDTO/bookResponse';
import { BookService } from '../../../services/book.services';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { Book } from '../../../models/dataDTO/book';

@Component({
    selector: 'app-books-selection',
    templateUrl: './books-selection.component.html',
    providers: [BookService]
})
export class BooksSelectionComponent extends BaseSelection<Book, BookResponse>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService) {

        let fprop = (new FilterProperties()).getBooksProp();
        let sprop = (new SortingProperties()).getBooksProp();
        super(bookService, fprop, sprop);
    }
}
