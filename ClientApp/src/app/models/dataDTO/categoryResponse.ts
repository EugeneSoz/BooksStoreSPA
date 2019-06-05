export class CategoryResponse {
    constructor(
        public id?: number,
        public name?: string,
        public parentCategoryID?: number | null,
        public parentCategoryName?: string,
        public displayedName?: string) { }
}
