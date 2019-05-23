import { Component, Input } from '@angular/core';
import { Book } from '../../../models/dataDTO/book';

@Component({
    selector: 'related-book-table',
    templateUrl: './related-book-table.component.html',
})
export class RelatedBookTableComponent {
    @Input() books: Array<Book> = null;
}
