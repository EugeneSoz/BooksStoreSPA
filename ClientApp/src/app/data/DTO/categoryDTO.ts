export class CategoryDTO {
    constructor(
        public id?: number,
        public name?: string,
        public parentCategoryID?: number | null) { }
}
