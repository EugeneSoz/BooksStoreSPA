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
var forms_1 = require("@angular/forms");
var errorAttributes_1 = require("../../enums/errorAttributes");
var CustomFormControl = /** @class */ (function (_super) {
    __extends(CustomFormControl, _super);
    function CustomFormControl(value, validator, label, property, entityType, ve) {
        var _this = _super.call(this, value, validator) || this;
        _this.label = label;
        _this.property = property;
        _this._entityType = entityType;
        _this._ve = ve;
        return _this;
    }
    CustomFormControl.prototype.getValidationMessages = function () {
        var messages = new Array();
        if (this.errors) {
            for (var errorName in this.errors) {
                switch (errorName) {
                    case errorAttributes_1.ErrorAttributes.required:
                        messages.push(this._ve.getValidationErrors(this._entityType, this.property, errorName));
                        break;
                    case errorAttributes_1.ErrorAttributes.minlength:
                        messages.push(this._ve.getValidationErrors(this._entityType, this.property, errorName));
                        break;
                }
            }
        }
        return messages;
    };
    return CustomFormControl;
}(forms_1.FormControl));
exports.CustomFormControl = CustomFormControl;
var CustomFormGroup = /** @class */ (function (_super) {
    __extends(CustomFormGroup, _super);
    function CustomFormGroup() {
        return _super.call(this, {}) || this;
    }
    Object.defineProperty(CustomFormGroup.prototype, "customControls", {
        get: function () {
            var _this = this;
            return Object.keys(this.controls)
                .map(function (k) { return _this.controls[k]; });
        },
        enumerable: true,
        configurable: true
    });
    return CustomFormGroup;
}(forms_1.FormGroup));
exports.CustomFormGroup = CustomFormGroup;
//# sourceMappingURL=form.js.map