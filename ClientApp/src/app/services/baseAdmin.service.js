"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queryOptions_1 = require("../models/dataDTO/queryOptions");
var httpMethods_1 = require("../enums/httpMethods");
var pagination_1 = require("../models/pagination");
var BaseAdminService = /** @class */ (function () {
    function BaseAdminService(_rest) {
        this._rest = _rest;
        this._entities = null;
        this.queryOptions = null;
        this.entity = null;
        this.pagination = null;
        this.searchTerm = null;
        this.queryOptions = new queryOptions_1.QueryOptions();
        this.queryOptions.resetToDefault();
    }
    Object.defineProperty(BaseAdminService.prototype, "entities", {
        get: function () {
            return this._entities;
        },
        set: function (value) {
            if (value != undefined || value != null) {
                this._entities = value;
                //создать класс Pagination
                this.pagination = new pagination_1.Pagination(value.currentPage, value.pageSize, value.totalPages, value.hasPreviousPage, value.hasNextPage, value.leftBoundary, value.rightBoundary);
                //создать массив из которого будет строиться компонент Pagination
                var array = new Array();
                for (var i = this.pagination.leftBoundary; i <= this.pagination.rightBoundary; i++) {
                    array.push(i);
                }
                this.pageNumbers = array;
            }
        },
        enumerable: true,
        configurable: true
    });
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
    BaseAdminService.prototype.search = function (options) {
        this.queryOptions.searchPropertyName = options.searchPropertyName;
        this.queryOptions.searchTerm = options.searchTerm;
        this.searchTerm = options.searchTerm;
        this.getEntities();
    };
    BaseAdminService.prototype.sort = function (options) {
        this.queryOptions.sortPropertyName = options.sortPropertyName;
        this.queryOptions.descendingOrder = options.descendingOrder;
        this.sortPropertyName = options.sortPropertyName;
        this.getEntities();
    };
    return BaseAdminService;
}());
exports.BaseAdminService = BaseAdminService;
//# sourceMappingURL=baseAdmin.service.js.map