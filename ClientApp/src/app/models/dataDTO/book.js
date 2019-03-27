"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, title, authors, year, language, pageCount, description, price, bookCover, categoryID, publisherID, category, publisher) {
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
        this.category = category;
        this.publisher = publisher;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map