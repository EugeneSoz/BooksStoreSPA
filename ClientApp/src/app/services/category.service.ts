import { Injectable } from '@angular/core';

import { BaseAdminService } from './baseAdmin.service';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { Category } from '../data/category';
import { CategoryResponse } from '../data/DTO/categoryResponse';
import { CategoryDTO } from '../data/DTO/categoryDTO';


@Injectable()
export class CategoryService extends BaseAdminService<Category, CategoryResponse, CategoryDTO> {

    constructor(
        urls: Urls,
        rest: RestDatasource) {

        super(rest);
        this.getAllUrl = urls.categories;
        this.getOneUrl = urls.category;
        this.createUrl = urls.category_create;
        this.updateUrl = urls.category_update;
        this.deleteUrl = urls.category_delete;
        this.fitlerPropUrl = urls.cat_filter;
        this.sortingPropUrl = urls.cat_sorting;
    }
}
