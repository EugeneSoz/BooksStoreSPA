"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = /** @class */ (function () {
    function Category(id, name, parentCategoryID, parentCategory, childrenCategories, books) {
        this.id = id;
        this.name = name;
        this.parentCategoryID = parentCategoryID;
        this.parentCategory = parentCategory;
        this.childrenCategories = childrenCategories;
        this.books = books;
    }
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=category.js.map