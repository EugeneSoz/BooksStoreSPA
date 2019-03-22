import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Pagination } from '../../models/pagination';
import { PaginationButtonType } from '../../enums/paginationButtonType';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent {

    @Input() pagination: Pagination;
    @Output() pageNumberEvent = new EventEmitter<number>();

    _selectedPage: number;
    first: number = PaginationButtonType.First;
    last: number = PaginationButtonType.Last;
    previous: number = PaginationButtonType.Previous;
    next: number = PaginationButtonType.Next;

    get pageNumbers(): Array<number> {
        let array: Array<number> = new Array<number>();

        for (let i = this.pagination.leftBoundary; i <= this.pagination.rightBoundary; i++) {
            array.push(i);
        }

        return array;
    }

    get selectedPage(): number {
        if (this.pagination == undefined) {
            return 1;
        }
        else if (this.pagination.currentPage != 1) {
            return this.pagination.currentPage;
        }
        else {
            this._selectedPage;
        }
    }

    set selectedPage(value: number) {
        this._selectedPage = value;
    }

    onChangePage(newPage: number): void {
        if (newPage == this.previous && this.pagination.hasPreviousPage == false ||
            newPage == this.next && this.pagination.hasNextPage == false) {
            return;
        }

        if (newPage == this.first && this.selectedPage == 1 ||
            newPage == this.last && this.selectedPage == this.pagination.totalPages) {
            return;
        }

        switch (newPage) {
            case PaginationButtonType.First:
                this.selectedPage = 1;
                break;
            case PaginationButtonType.Last:
                this.selectedPage = this.pagination.totalPages;
                break;
            case PaginationButtonType.Previous:
                this.selectedPage = this.pagination.currentPage - 1;
                break;
            case PaginationButtonType.Next:
                this.selectedPage = this.pagination.currentPage + 1;
                break;
        }

        if (newPage > 0 && newPage <= this.pagination.totalPages) {
            this.selectedPage = newPage;
        }

        this.pageNumberEvent.emit(this._selectedPage);
    }
}
