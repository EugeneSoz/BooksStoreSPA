import { Component, OnInit } from '@angular/core';

import "jquery";
import "bootstrap";
import { StoreService } from '../../shared/store.service';
import { ListItem, Dropdown } from '../../../models/dropdown.model';
import { BooksGridType } from '../../../models/enums/book-grid-type.enum';
import { QueryOptions } from '../../../models/domain/DTO/query-options.model';

@Component({
    selector: '.navbar-nav .mr-auto',
    templateUrl: './actions.component.html',
})
export class ActionsComponent implements OnInit {

    constructor(
        private _storeService: StoreService) { }

    storeSorting: Array<ListItem> = null;
    storeView: Array<ListItem> = null;
    gridSizeName: string = BooksGridType.ThreeByFour;

    get sortPropertyName(): string {
        return this._storeService.sortPropertyName;
    }

    private _descendingOrder: boolean = false;

    ngOnInit() {
        let dropdown: Dropdown = new Dropdown();
        dropdown.createStoreSorting();
        dropdown.createStoreView();

        this.storeSorting = dropdown.storeSorting;
        this.storeView = dropdown.storeView;
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

    onShowGrid(): void {
        $("#navbarDropdown1").dropdown("toggle");
    }

    onShowSorting(): void
    {
        $("#navbarDropdown2").dropdown("toggle");
    }

    onSort(listItem: ListItem): void {
        this._descendingOrder = listItem.descendingOrder;
        let options: QueryOptions = new QueryOptions();
        options.sortPropertyName = listItem.propertyName;
        options.descendingOrder = listItem.descendingOrder;

        this._storeService.sort(options);
    }
}
