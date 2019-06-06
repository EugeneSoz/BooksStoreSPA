import { Book } from './book';
import { PublisherDTO } from './DTO/publisherDTO';

export class Publisher extends PublisherDTO {
    constructor(
        public books: Array<Book> = null) {

        super();
    }
}
