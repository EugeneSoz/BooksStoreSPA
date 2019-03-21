import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { PagedResponse } from 'src/app/models/dataDTO/pagedResponse';
import { BookResponse } from 'src/app/models/dataDTO/bookResponse';

@Component({
    selector: 'books-grid',
    templateUrl: './books-grid.component.html',
    providers: [StoreService]
})
export class BooksGridComponent implements OnInit
{
    constructor(
        private _storeService: StoreService) {}

    get books(): PagedResponse<BookResponse> {
        return this._storeService.books;
    }

    //кол-во книжных карт в строке
    get cardsCountInRow(): number {
        return this._storeService.cardsCountInRow;
    }

    //общее кол-во отображаемых книг на странице
    get displayedBooksCount(): number  {
        return this._storeService.displayedBooksCount;
    }

    get rows(): Array<number> {
        return this._storeService.rows;
    }

    get cols(): Array<number> {
        return this._storeService.cols;
    }

    ngOnInit(): void {
        this._storeService.getBooks();
    }

    //получить книгу из массива исходя из номера строки и столбца
    getBookIndex(row: number, column: number): number {
        return this.cardsCountInRow * row + column;
    }

    isColEmpty(row: number, column: number): boolean {
        return this.getBookIndex(row, column) < this.displayedBooksCount
            ? false
            : true;
    }

    // protected async Task OnGoToPageAsync(int buttonNumber)
    // {
    // StoreService.QueryOptions.CurrentPage = buttonNumber;
    // await StoreService.GetBooksAsync();
    // }
}
