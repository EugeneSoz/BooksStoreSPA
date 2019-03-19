import { Book } from './book';

export class Category {
    constructor(
        public name?: string,
        public parentCategoryID?: number | null,
        public parentCategory?: Category,
        public childernCategories?: Array<Category>,
        public books?: Array<Book>
    ) { }
}
