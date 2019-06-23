import { Component, Input } from '@angular/core';
import { BookResponse } from '../../../data/DTO/bookResponse';

@Component({
    selector: 'app-book-info',
    templateUrl: './book-info.component.html',
})
export class BookInfoComponent {
    @Input() book: BookResponse = null;
}
