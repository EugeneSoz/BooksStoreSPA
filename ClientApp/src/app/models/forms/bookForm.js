"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = require("./form");
var forms_1 = require("@angular/forms");
var entityType_1 = require("../../enums/entityType");
var validationErrors_1 = require("./validationErrors");
var BookFormGroup = /** @class */ (function (_super) {
    __extends(BookFormGroup, _super);
    function BookFormGroup(nh, book) {
        var _this = _super.call(this) || this;
        _this._ve = new validationErrors_1.ValidationErrors();
        _this.addControl(nh.nameof("title"), new form_1.CustomFormControl(book.title, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]), "Название книги", nh.nameof("title"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("authors"), new form_1.CustomFormControl(book.authors, forms_1.Validators.required, "Авторы", nh.nameof("authors"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("language"), new form_1.CustomFormControl(book.language, forms_1.Validators.required, "Язык", nh.nameof("language"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("year"), new form_1.CustomFormControl(book.year, undefined, "Дата публикации", nh.nameof("year"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("pageCount"), new form_1.CustomFormControl(book.pageCount, undefined, "Количество сраниц", nh.nameof("pageCount"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("price"), new form_1.CustomFormControl(book.price, undefined, "Цена", nh.nameof("price"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("category"), new form_1.CustomFormControl(book.title, undefined, "Категория", nh.nameof("category"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl("subcategory", new form_1.CustomFormControl(book.title, undefined, "Подкатегория", "subcategory", entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("publisher"), new form_1.CustomFormControl(book.title, undefined, "Издательство", nh.nameof("publisher"), entityType_1.EntityType.Book, _this._ve));
        _this.addControl(nh.nameof("description"), new form_1.CustomFormControl(book.description, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]), "Описание", nh.nameof("description"), entityType_1.EntityType.Book, _this._ve));
        return _this;
    }
    return BookFormGroup;
}(form_1.CustomFormGroup));
exports.BookFormGroup = BookFormGroup;
//# sourceMappingURL=bookForm.js.map