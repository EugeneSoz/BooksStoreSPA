export class BookResponse {
    constructor(
        public id?: number,
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
        public categoryName?: string,
        public subcategoryName?: string,
        public publisherName?: string) { }
}