import { Component } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
    selector: 'search-toolbar',
    templateUrl: './search-toolbar.component.html',
    providers: [StoreService]
})
export class SearchToolbarComponent {
    constructor(
        private _storeService: StoreService) { }

    searchTerm: string = "";
    isCalcelButtonVisiable: boolean = (this.searchTerm == null || this.searchTerm == "")
        ? false
        : true;

    onSetSearchTerm(value: string): void {
        this.searchTerm = value.toString();
    }

    onClearSearchTerm(): void
    {
        this.searchTerm = "";
        //StoreService.ResetSearchResult();
    }

    onSearchByName(): void
    {
        //if (eventArgs.Key == "Enter" && SearchTerm.Length > 0) {
            //StoreService.SearchByName(SearchTerm);
        //}
    }
}
