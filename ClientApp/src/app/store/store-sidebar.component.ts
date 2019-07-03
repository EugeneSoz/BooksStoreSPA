import { Component, OnInit } from '@angular/core';

import { StoreService } from './shared/store.service';
import { PageLink } from '../models/enums/page-link.enum';
import { Category } from '../models/domain/category.model';
import { nameof } from '../core/helper-functions';
import { BookResponse } from '../models/domain/DTO/book-response.model';

@Component({
    selector: 'bs-store-sidebar',
    templateUrl: './store-sidebar.component.html',
})
export class StoreSidebarComponent implements OnInit {

    constructor(
        private _storeService: StoreService) { }

    link: string = PageLink.admin;
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
        //$(`#c_${id}`).collapse('toggle');

        if (id == 0) {
            this._storeService.filterBy("", id);
        }
        else {
            this._storeService.filterBy(nameof<BookResponse>("categoryName"), id);
        }
    }

    onFilterBySubcategory(categoryId: number, subcategoryId: number): void
    {
        this._selectedCategoryId = categoryId;
        this._selectedSubCategoryId = subcategoryId;

        this._storeService.filterBy(nameof<BookResponse>("subcategoryName"),
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
