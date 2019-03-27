import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../../models/dataDTO/category';
import { BaseSelection } from '../../../viewModels/baseSelection';
import { CateogoryService } from '../../../services/category.service';
import { FilterProperties, SortingProperties } from '../../../viewModels/filterProperty';

@Component({
    selector: 'categories-selection',
    templateUrl: './categories-selection.component.html',
})
export class CategoriesSelectionComponent extends BaseSelection<Category, Category>
    implements OnInit, OnDestroy {

    constructor(
       categoryService: CateogoryService) {

        let fprop = (new FilterProperties()).getCategoriesProp()
        let sprop = (new SortingProperties()).getCategoriesProp()
        super(categoryService, fprop, sprop);
    }
}
