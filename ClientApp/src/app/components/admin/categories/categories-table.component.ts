import { Component, OnInit, OnDestroy } from '@angular/core';

import { CategoryService } from '../../../services/category.service';
import { EntityType } from '../../../enums/entityType';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageLink } from '../../../enums/pageLink';
import { BaseTable } from '../../../models/baseSelection';
import { Category } from '../../../data/category';
import { CategoryResponse } from '../../../data/DTO/categoryResponse';
import { CategoryDTO } from '../../../data/DTO/categoryDTO';

@Component({
    templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent extends BaseTable<Category, CategoryResponse, CategoryDTO>
    implements OnInit, OnDestroy {

    constructor(
        categoryService: CategoryService,
        modalService: BsModalService) {

        super(categoryService, EntityType.Category, modalService, `/${PageLink.admin_categories}`);
    }
}
