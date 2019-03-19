"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PagedResponse = /** @class */ (function () {
    function PagedResponse(entities, currentPage, pageSize, totalPages, hasPreviousPage, hasNextPage, leftBoundary, rightBoundary) {
        this.entities = entities;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        this.hasPreviousPage = hasPreviousPage;
        this.hasNextPage = hasNextPage;
        this.leftBoundary = leftBoundary;
        this.rightBoundary = rightBoundary;
    }
    return PagedResponse;
}());
exports.PagedResponse = PagedResponse;
//# sourceMappingURL=pagedResponse.js.map