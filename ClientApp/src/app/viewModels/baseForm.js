"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseForm = /** @class */ (function () {
    function BaseForm(activeRoute) {
        this._id = 0;
        this.editing = false;
        this.form = null;
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this._id = activeRoute.snapshot.params["id"];
    }
    Object.defineProperty(BaseForm.prototype, "title", {
        get: function () {
            return this.editing ? "Редактировать" : "Создать";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseForm.prototype, "background", {
        get: function () {
            return this.editing ? "btn btn-warning" : "btn btn-primary";
        },
        enumerable: true,
        configurable: true
    });
    BaseForm.prototype.getErrors = function (property) {
        if (this.form.controls[property].dirty && this.form.controls[property].invalid) {
            return this.form.controls[property].getValidationMessages();
        }
        else {
            return null;
        }
    };
    return BaseForm;
}());
exports.BaseForm = BaseForm;
//# sourceMappingURL=baseForm.js.map