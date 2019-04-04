import { Component, Input } from '@angular/core';
import { BookResponse } from 'src/app/models/dataDTO/bookResponse';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
    @Input() book: BookResponse = null;
}
