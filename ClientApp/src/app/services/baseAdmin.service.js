"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queryOptions_1 = require("../models/dataDTO/queryOptions");
var httpMethods_1 = require("../enums/httpMethods");
var BaseAdminService = /** @class */ (function () {
    function BaseAdminService(_rest) {
        this._rest = _rest;
        this.queryOptions = null;
        this.entity = null;
        this.entities = null;
        this.queryOptions = new queryOptions_1.QueryOptions();
        this.queryOptions.resetToDefault();
    }
    BaseAdminService.prototype.getEntities = function () {
        var _this = this;
        this._rest.receiveAll(this.getAllUrl, this.queryOptions)
            .subscribe(function (response) {
            _this.entities = _this._rest.getResponseBody(response, httpMethods_1.HttpMethod.POSTGET);
        });
    };
    BaseAdminService.prototype.getEntity = function (id) {
        var _this = this;
        this._rest.getAll(this.getOneUrl + "/" + id)
            .subscribe(function (response) {
            _this.entity = _this._rest.getResponseBody(response, httpMethods_1.HttpMethod.GET);
        });
    };
    return BaseAdminService;
}());
exports.BaseAdminService = BaseAdminService;
//# sourceMappingURL=baseAdmin.service.js.map