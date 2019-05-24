import { Component, OnInit, OnDestroy } from '@angular/core';

import { Category } from '../../../models/dataDTO/category';
import { BaseTable } from '../../../viewModels/baseSelection';
import { CategoryService } from '../../../services/category.service';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { CategoryResponse } from '../../../models/dataDTO/categoryResponse';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';

@Component({
    templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent extends BaseTable<Category, CategoryResponse>
    implements OnInit, OnDestroy {

    constructor(
        categoryService: CategoryService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        let fprop = (new FilterProperties()).getCategoriesProp()
        let sprop = (new SortingProperties()).getCategoriesProp()
        super(categoryService, fprop, sprop, EntityType.Category, modalService);

        this._categoryService = categoryService;
        this.subscription.add(
            deletionService.categoryDeleted.subscribe(deletion => {
                let model: Category = deletion.entity as Category;
                categoryService.deleteEntity(model);
            }));
    }

    private _categoryService: CategoryService;

    get categoryActions(): boolean {
        return this._categoryService.categoryActions;
    }

    onChangeActions() {
        this._categoryService.categoryActions = !this._categoryService.categoryActions;
    }
}
