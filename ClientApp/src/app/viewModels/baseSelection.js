"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSelection = /** @class */ (function () {
    function BaseSelection(_service, fprop, sprop) {
        this._service = _service;
        this.filterProperties = fprop;
        this.sortingProperties = sprop;
    }
    Object.defineProperty(BaseSelection.prototype, "adminEntities", {
        get: function () {
            return this._service.entities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSelection.prototype, "pagination", {
        get: function () {
            return this._service.pagination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSelection.prototype, "pageNumbers", {
        get: function () {
            return this._service.pageNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSelection.prototype, "searchTerm", {
        get: function () {
            return this._service.searchTerm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSelection.prototype, "sortPropertyName", {
        get: function () {
            return this._service.sortPropertyName;
        },
        enumerable: true,
        configurable: true
    });
    BaseSelection.prototype.ngOnInit = function () {
        this._service.getEntities();
    };
    BaseSelection.prototype.onChangePage = function (newPage) {
        this._service.queryOptions.currentPage = newPage;
        this._service.getEntities();
    };
    BaseSelection.prototype.onSearch = function (options) {
        this._service.search(options);
    };
    BaseSelection.prototype.onSort = function (options) {
        this._service.sort(options);
    };
    BaseSelection.prototype.ngOnDestroy = function () {
        this._service.queryOptions.resetToDefault();
    };
    return BaseSelection;
}());
exports.BaseSelection = BaseSelection;
//# sourceMappingURL=baseSelection.js.map