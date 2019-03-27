"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookResponse = /** @class */ (function () {
    function BookResponse(id, title, authors, year, language, pageCount, description, price, bookCover, categoryID, publisherID, parentCategoryName, categoryName, publisherName) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.year = year;
        this.language = language;
        this.pageCount = pageCount;
        this.description = description;
        this.price = price;
        this.bookCover = bookCover;
        this.categoryID = categoryID;
        this.publisherID = publisherID;
        this.parentCategoryName = parentCategoryName;
        this.categoryName = categoryName;
        this.publisherName = publisherName;
    }
    return BookResponse;
}());
exports.BookResponse = BookResponse;
//# sourceMappingURL=bookResponse.js.map