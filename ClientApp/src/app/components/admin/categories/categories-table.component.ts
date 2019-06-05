import { Component, OnInit, OnDestroy } from '@angular/core';

import { Category } from '../../../models/dataDTO/category';
import { BaseTable } from '../../../viewModels/baseSelection';
import { CategoryService } from '../../../services/category.service';
import { CategoryResponse } from '../../../models/dataDTO/categoryResponse';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeletionService } from '../../../services/deletion.service';
import { PageLink } from '../../../enums/pageLink';

@Component({
    templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent extends BaseTable<Category, CategoryResponse>
    implements OnInit, OnDestroy {

    constructor(
        categoryService: CategoryService,
        modalService: BsModalService,
        deletionService: DeletionService) {

        super(categoryService, EntityType.Category, modalService, `/${PageLink.admin_categories}`);

        this.subscription.add(
            deletionService.categoryDeleted.subscribe(deletion => {
                let model: Category = deletion.entity as Category;
                categoryService.deleteEntity(model);
            }));
    }
}
