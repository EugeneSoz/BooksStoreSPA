import { Book } from './book';

export class Publisher {
    constructor(
        public id?: number,
        public name?: string,
        public country?: string,
        public books?: Array<Book>) { }
}
