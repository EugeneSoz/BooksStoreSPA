import { Injectable } from '@angular/core';

import { BaseAdminService } from './baseAdmin.service';
import { Category } from '../models/dataDTO/category';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';

@Injectable()
export class CateogoryService extends BaseAdminService<Category, Category> {

    constructor(
        urls: Urls,
        rest: RestDatasource) {

        super(rest);
        this.getAllUrl = urls.categories;
        this.getOneUrl = urls.category;
    }
}
