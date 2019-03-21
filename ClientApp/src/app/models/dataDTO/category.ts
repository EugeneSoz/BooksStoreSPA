import { Book } from './book';

export class Category {
    constructor(
        public id?: number,
        public name?: string,
        public parentCategoryID?: number | null,
        public parentCategory?: Category,
        public childrenCategories?: Array<Category>,
        public books?: Array<Book>
    ) { }
}
