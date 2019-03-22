import { Category } from './category';
import { Publisher } from './publisher';

export class Book {
    constructor(
        public title?: string,
        public authors?: string,
        public year?: number,
        public language?: string,
        public pageCount?: number,
        public description?: string,
        public price?: number,
        public bookCover?: string,
        public categoryID?: number | null,
        public publisherID?: number | null,
        public category?: Category,
        public publisher?: Publisher) { }
}
