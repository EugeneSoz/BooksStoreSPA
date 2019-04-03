import { Book } from './book';

export class Publisher {
    constructor(
        public id: number = 0,
        public name: string = "",
        public country: string = "",
        public books: Array<Book> = null) { }
}
