import { Component } from "@angular/core";
import { BookService } from '../../../services/book.services';

@Component({
    templateUrl: './books-section.component.html',
    providers: [BookService]
})
export class BooksSectionComponent { }
