"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = /** @class */ (function () {
    function Pagination(currentPage, pageSize, totalPages, hasPreviousPage, hasNextPage, leftBoundary, rightBoundary) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        this.hasPreviousPage = hasPreviousPage;
        this.hasNextPage = hasNextPage;
        this.leftBoundary = leftBoundary;
        this.rightBoundary = rightBoundary;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map