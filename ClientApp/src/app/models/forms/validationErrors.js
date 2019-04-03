"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nameofHelper_1 = require("../../helpers/nameofHelper");
var entityType_1 = require("../../enums/entityType");
var errorAttributes_1 = require("../../enums/errorAttributes");
var ValidationErrors = /** @class */ (function () {
    function ValidationErrors() {
        this._nameofHelper = new nameofHelper_1.NameOfHelper();
    }
    ValidationErrors.prototype.getValidationErrors = function (entityType, property, errorName) {
        switch (entityType) {
            case entityType_1.EntityType.Publisher:
                return this.getPublishersValidationErrors(property, errorName);
        }
    };
    ValidationErrors.prototype.getPublishersValidationErrors = function (property, errorName) {
        var msg = null;
        if (property == this._nameofHelper.nameof("name")
            && errorName == errorAttributes_1.ErrorAttributes.required) {
            msg = "Укажите название издательства";
        }
        else if (property == this._nameofHelper.nameof("name")
            && errorName == errorAttributes_1.ErrorAttributes.minlength) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }
        else if (property == this._nameofHelper.nameof("country")
            && errorName == errorAttributes_1.ErrorAttributes.required) {
            msg = "Укажите название страны нахождения издательства";
        }
        return msg;
    };
    return ValidationErrors;
}());
exports.ValidationErrors = ValidationErrors;
//# sourceMappingURL=validationErrors.js.map