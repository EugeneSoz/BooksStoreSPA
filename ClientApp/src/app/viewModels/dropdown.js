"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookGridType_1 = require("../enums/bookGridType");
//класс содержит элементы списка в панели Toolbar
var ListItem = /** @class */ (function () {
    function ListItem(propertyName, name, descendingOrder, hasDivider, href) {
        if (descendingOrder === void 0) { descendingOrder = false; }
        if (hasDivider === void 0) { hasDivider = false; }
        if (href === void 0) { href = "#"; }
        this.propertyName = propertyName;
        this.name = name;
        this.descendingOrder = descendingOrder;
        this.hasDivider = hasDivider;
        this.href = href;
    }
    return ListItem;
}());
exports.ListItem = ListItem;
var Dropdown = /** @class */ (function () {
    function Dropdown() {
    }
    Dropdown.prototype.createStoreSorting = function () {
        var nameof = function (name) { return name; };
        this.storeSorting = new Array(new ListItem("", "Сортировать по", false), new ListItem(this.nameof("title"), "Названию: А - Я"), new ListItem(nameof("title"), "Названию: Я - А", true), new ListItem(nameof("price"), "Цене: мин. - макс."), new ListItem(nameof("price"), "Цене: макс. - мин.", true));
    };
    Dropdown.prototype.createStoreView = function () {
        this.storeView = new Array(new ListItem("", "Отобразить", false), new ListItem(String(bookGridType_1.BooksGridType.SixByTwo), "6 x 2"), new ListItem(String(bookGridType_1.BooksGridType.FourByThree), "4 x 3"), new ListItem(String(bookGridType_1.BooksGridType.ThreeByFour), "3 x 4"));
    };
    Dropdown.prototype.nameof = function (key, instance) {
        return key;
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.js.map