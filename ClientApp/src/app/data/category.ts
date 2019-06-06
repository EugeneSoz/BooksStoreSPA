import { Book } from './book';
import { CategoryDTO } from './DTO/categoryDTO';

export class Category extends CategoryDTO {
    constructor(
        public displayedName?: string,
        public parentCategory?: Category,
        public childrenCategories?: Array<Category>,
        public books?: Array<Book>) {

        super();
    }
}
