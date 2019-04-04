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
var CategoryFormGroup = /** @class */ (function (_super) {
    __extends(CategoryFormGroup, _super);
    function CategoryFormGroup(nh, category) {
        var _this = _super.call(this) || this;
        _this._ve = new validationErrors_1.ValidationErrors();
        _this.addControl(nh.nameof("parentCategoryID"), new form_1.CustomFormControl(category.parentCategoryID, undefined, "Родительская категория", nh.nameof("parentCategoryID"), entityType_1.EntityType.Category, _this._ve));
        _this.addControl(nh.nameof("name"), new form_1.CustomFormControl(category.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]), "Название категории", nh.nameof("name"), entityType_1.EntityType.Publisher, _this._ve));
        return _this;
    }
    return CategoryFormGroup;
}(form_1.CustomFormGroup));
exports.CategoryFormGroup = CategoryFormGroup;
//# sourceMappingURL=categoryForm.js.map