import { Component, Input } from '@angular/core';
import { Book } from '../../../models/dataDTO/book';

@Component({
    selector: 'app-book-info',
    templateUrl: './book-info.component.html',
})
export class BookInfoComponent {
    @Input() book: Book = null;
}
