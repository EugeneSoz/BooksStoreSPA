import { Component } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { QueryOptions } from '../../../data/DTO/queryOptions';
import { BookResponse } from '../../../data/DTO/bookResponse';

@Component({
    selector: 'search-toolbar',
    templateUrl: './search-toolbar.component.html',
})
export class SearchToolbarComponent {
    constructor(
        private _storeService: StoreService,
        private _nameOfHelper: NameOfHelper) { }

    searchProperyName: string;
    searchTerm: string = null;

    get isClearBtnVisible(): boolean {
        return this._storeService.searchTerm == null ? false : true;
    }

    onInputSearchValue(value: string): void {
        this.searchTerm = value;
    }

    onSearch(clear: boolean = false): void {
        let options: QueryOptions = new QueryOptions();
        if (clear) {
            options.searchPropertyNames = null;
            options.searchTerm = null;
        }
        else {
            options.searchPropertyNames = new Array(
                this._nameOfHelper.nameof<BookResponse>("title"),
                this._nameOfHelper.nameof<BookResponse>("authors"));

            options.searchTerm = this.searchTerm;
        }

        this._storeService.search(options);
    }

    onClear(): void {
        this.searchTerm = null;
        this.onSearch(true);
    }
}
