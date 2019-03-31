import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Category } from '../../models/dataDTO/category';
import 'jquery';
import 'bootstrap';
import { BookResponse } from '../../models/dataDTO/bookResponse';
import { NameOfHelper } from '../../helpers/nameofHelper';

@Component({
    selector: 'store-sidebar',
    templateUrl: './store-sidebar.component.html',
})
export class StoreSidebarComponent implements OnInit {

    constructor(
        private _storeService: StoreService,
        private _nameofHelper: NameOfHelper) { }

    private _selectedCategoryId: number = 0;
    private _selectedSubCategoryId: number = 0;

    get categories(): Array<Category> {
        return this._storeService.categories;
    }

    ngOnInit(): void {
        this._storeService.getCategories();
    }

    onFilterByCategory(id: number): void
    {
        this._selectedCategoryId = id;
        this._selectedSubCategoryId = 0;
        $(`#c_${id}`).collapse('toggle');

        if (id == 0) {
            this._storeService.filterBy("", id);
        }
        else {
            this._storeService.filterBy(this._nameofHelper.nameof<BookResponse>("categoryName"), id);
        }
    }

    onFilterBySubcategory(categoryId: number, subcategoryId: number): void
    {
        this._selectedCategoryId = categoryId;
        this._selectedSubCategoryId = subcategoryId;

        this._storeService.filterBy(this._nameofHelper.nameof<BookResponse>("subcategoryName"),
            subcategoryId);
    }

    getCategoryClass(id: number)
    {
        return this._selectedCategoryId == id ? " selected" : "";
    }

    getSubCategoryClass(id: number)
    {
        return this._selectedSubCategoryId == id ? " selected" : "";
    }

    getControlId(id: number): string {
        return `c_${id}`;
    }
}
