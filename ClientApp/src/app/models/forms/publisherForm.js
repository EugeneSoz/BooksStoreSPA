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
var validationErrors_1 = require("./validationErrors");
var entityType_1 = require("../../enums/entityType");
var PublisherFormGroup = /** @class */ (function (_super) {
    __extends(PublisherFormGroup, _super);
    function PublisherFormGroup(nh, publisher) {
        var _this = _super.call(this) || this;
        _this._ve = new validationErrors_1.ValidationErrors();
        _this.addControl(nh.nameof("name"), new form_1.CustomFormControl(publisher.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]), "Название издательства", nh.nameof("name"), entityType_1.EntityType.Publisher, _this._ve));
        _this.addControl(nh.nameof("country"), new form_1.CustomFormControl(publisher.country, forms_1.Validators.required, "Страна нахождения издательства", nh.nameof("country"), entityType_1.EntityType.Publisher, _this._ve));
        return _this;
    }
    return PublisherFormGroup;
}(form_1.CustomFormGroup));
exports.PublisherFormGroup = PublisherFormGroup;
//# sourceMappingURL=publisherForm.js.map