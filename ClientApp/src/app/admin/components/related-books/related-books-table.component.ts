import { Component, Input } from '@angular/core';
import { Book } from '../../../models/domain/book.model';

@Component({
    selector: 'related-books-table',
    templateUrl: './related-books-table.component.html',
})
export class RelatedBookTableComponent {
    @Input() books: Array<Book> = null;
}
