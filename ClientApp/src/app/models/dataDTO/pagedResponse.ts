import { Pagination } from '../pagination';

export class PagedResponse<T> extends Pagination {
    constructor(
        public entities?: Array<T>,
        currentPage?: number,
        pageSize?: number,
        totalPages?: number,
        hasPreviousPage?: boolean,
        hasNextPage?: boolean,
        leftBoundary?: number,
        rightBoundary?: number) {

        super(currentPage, pageSize, totalPages, hasPreviousPage, hasNextPage, leftBoundary, rightBoundary);
    }
}
