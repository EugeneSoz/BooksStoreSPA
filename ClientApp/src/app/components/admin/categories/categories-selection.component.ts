import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../../models/dataDTO/category';
import { BaseSelection } from '../../../viewModels/baseSelection';
import { CategoryService } from '../../../services/category.service';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';
import { CategoryResponse } from '../../../models/dataDTO/categoryResponse';
import { EntityType } from '../../../enums/entityType';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'categories-selection',
    templateUrl: './categories-selection.component.html',
    providers: [CategoryService]
})
export class CategoriesSelectionComponent extends BaseSelection<Category, CategoryResponse>
    implements OnInit, OnDestroy {

    constructor(
        categoryService: CategoryService,
        modalService: BsModalService) {

        let fprop = (new FilterProperties()).getCategoriesProp()
        let sprop = (new SortingProperties()).getCategoriesProp()
        super(categoryService, fprop, sprop, EntityType.Category, modalService);
    }
}
