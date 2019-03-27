"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilterProperty = /** @class */ (function () {
    function FilterProperty(property, name) {
        this.property = property;
        this.name = name;
    }
    return FilterProperty;
}());
exports.FilterProperty = FilterProperty;
var FilterProperties = /** @class */ (function () {
    function FilterProperties() {
    }
    FilterProperties.prototype.getPublishersProp = function () {
        return new Array(new FilterProperty(this.nameof("name"), "Издательство"));
    };
    FilterProperties.prototype.getCategoriesProp = function () {
        return new Array(new FilterProperty(this.nameof("name"), "Категория"), new FilterProperty("s_" + this.nameof("name"), "Подкатегория"));
    };
    FilterProperties.prototype.getBooksProp = function () {
        return new Array(new FilterProperty(this.nameof("title"), "Название"), new FilterProperty(this.nameof("parentCategoryName"), "Категория"), new FilterProperty(this.nameof("categoryName"), "Подкатегория"), new FilterProperty(this.nameof("publisherName"), "Издательство"), new FilterProperty(this.nameof("price"), "Цена"));
    };
    FilterProperties.prototype.nameof = function (key, instance) {
        return key;
    };
    return FilterProperties;
}());
exports.FilterProperties = FilterProperties;
var SortingProperties = /** @class */ (function () {
    function SortingProperties() {
    }
    SortingProperties.prototype.getPublishersProp = function () {
        return new Array(new FilterProperty(this.nameof("id"), "ID"), new FilterProperty(this.nameof("name"), "Издательство"), new FilterProperty(this.nameof("country"), "Страна нахождения издательства"));
    };
    SortingProperties.prototype.getCategoriesProp = function () {
        return new Array(new FilterProperty(this.nameof("id"), "ID"), new FilterProperty(this.nameof("name"), "Категория/Подкатегория"));
    };
    SortingProperties.prototype.getBooksProp = function () {
        return new Array(new FilterProperty(this.nameof("id"), "ID"), new FilterProperty(this.nameof("title"), "Название"), new FilterProperty(this.nameof("parentCategoryName"), "Категория"), new FilterProperty(this.nameof("categoryName"), "Подкатегория"), new FilterProperty(this.nameof("publisherName"), "Издательство"), new FilterProperty(this.nameof("price"), "Цена"));
    };
    SortingProperties.prototype.nameof = function (key, instance) {
        return key;
    };
    return SortingProperties;
}());
exports.SortingProperties = SortingProperties;
//# sourceMappingURL=filterProperty.js.map