import { Category } from './category';
import { Publisher } from './publisher';
import { BookDTO } from './DTO/bookDTO';

export class Book extends BookDTO {
    constructor(
        public category?: Category,
        public publisher?: Publisher) {

        super();
    }
}