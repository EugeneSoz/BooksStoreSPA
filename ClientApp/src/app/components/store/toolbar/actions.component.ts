import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service';
import { ListItem, Dropdown } from '../../../viewModels/dropdown';
import "jquery";
import "bootstrap";
import { BooksGridType } from '../../../enums/bookGridType';

@Component({
    selector: '.navbar-nav .mr-auto',
    templateUrl: './actions.component.html',
    providers: [StoreService]
})
export class ActionsComponent implements OnInit {

    constructor(
        private _storeService: StoreService) { }

    storeSorting: Array<ListItem> = null;
    storeView: Array<ListItem> = null;

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

        //if (listItem.PropertyName == "Desc")
        //{
        //    cssClass = TaskService.DescendingOrder ? string.Empty : " active";
        //}
        //else
        //{
        //    cssClass = TaskService.SortPropertyName == listItem.PropertyName
        //       ? " active"
        //       : string.Empty;
        //}


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

        this._storeService.changeBooksGridSize(cardsCountInRow);
    }

    showGrid(): void {
        $("#navbarDropdown1").dropdown("toggle");
    }

    showSorting(): void
    {
        $("#navbarDropdown2").dropdown("toggle");
    }
}
