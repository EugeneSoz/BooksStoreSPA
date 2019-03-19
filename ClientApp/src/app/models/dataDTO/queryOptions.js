"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryOptions = /** @class */ (function () {
    function QueryOptions(currentPage, pageSize, sortPropertyName, descendingOrder, searchPropertyName, searchTerm, filterPropertyName, filterPropertyValue) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.sortPropertyName = sortPropertyName;
        this.descendingOrder = descendingOrder;
        this.searchPropertyName = searchPropertyName;
        this.searchTerm = searchTerm;
        this.filterPropertyName = filterPropertyName;
        this.filterPropertyValue = filterPropertyValue;
    }
    QueryOptions.prototype.resetToDefault = function () {
        this.currentPage = 1;
        this.pageSize = 12;
        this.sortPropertyName = "";
        this.descendingOrder = false;
        this.searchPropertyName = "";
        this.searchTerm = "";
        this.filterPropertyName = "";
        this.filterPropertyValue = null;
    };
    return QueryOptions;
}());
exports.QueryOptions = QueryOptions;
//# sourceMappingURL=queryOptions.js.map