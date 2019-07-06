import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../shared/store.service';
import { BooksGridType } from '../../../models/enums/book-grid-type.enum';
import { QueryOptions } from '../../../models/domain/DTO/query-options.model';
import { Observable } from 'rxjs';
import { ListItem } from '../../../models/domain/DTO/dropdown.model';
import { map } from 'rxjs/operators';

@Component({
    selector: '.navbar-nav .mr-auto',
    templateUrl: './actions.component.html',
})
export class ActionsComponent implements OnInit {

    constructor(
        private _storeService: StoreService) { }

    gridSizeProperties$: Observable<Array<ListItem>>;
    sortingProperties$: Observable<Array<ListItem>>;
    gridSizeName: string = BooksGridType.ThreeByFour;

    get sortPropertyName(): string {
        return this._storeService.sortPropertyName;
    }

    private _descendingOrder: boolean = false;

    ngOnInit() {
        this.sortingProperties$ = this._storeService.getDropdownProps().pipe(
            map(d => d.sortingProperties));
        this.gridSizeProperties$ = this._storeService.getDropdownProps().pipe(
            map(d => d.gridSizeProperties));
    }

        //выделить в выпадающем списке свойство
    setElementCssClass(listItem: ListItem): string
    {
        let cssClass: string = "";

        if (listItem.propertyName == this.gridSizeName) {
            cssClass = " active";
        }

        if (listItem.propertyName == this.sortPropertyName
            && listItem.descendingOrder == this._descendingOrder) {
            cssClass = " active";
        }

        return `dropdown-item${cssClass}`;
    }

    onChangeBooksGridSize(listItem: ListItem): void
    {
        let cardsCountInRow: number = 0;
        switch (listItem.propertyName) {
            case BooksGridType.SixByTwo:
                cardsCountInRow = 2;
                break;
            case BooksGridType.FourByThree:
                cardsCountInRow = 3;
                break;
            default:
                cardsCountInRow = 4;
                break;
        }

        this.gridSizeName = listItem.propertyName;
        this._storeService.changeBooksGridSize(cardsCountInRow);
    }

    onSort(listItem: ListItem): void {
        this._descendingOrder = listItem.descendingOrder;
        let options: QueryOptions = new QueryOptions();
        options.sortPropertyName = listItem.propertyName;
        options.descendingOrder = listItem.descendingOrder;

        this._storeService.sort(options);
    }
}
