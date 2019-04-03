"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publisher = /** @class */ (function () {
    function Publisher(id, name, country, books) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (country === void 0) { country = ""; }
        if (books === void 0) { books = null; }
        this.id = id;
        this.name = name;
        this.country = country;
        this.books = books;
    }
    return Publisher;
}());
exports.Publisher = Publisher;
//# sourceMappingURL=publisher.js.map