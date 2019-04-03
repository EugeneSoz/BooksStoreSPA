import { Injectable, Inject } from '@angular/core';
import { Observer } from 'rxjs';

import { BaseAdminService } from './baseAdmin.service';
import { Category } from '../models/dataDTO/category';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { CategoryResponse } from '../models/dataDTO/categoryResponse';
import { Entity_Changed, EntityEventArgs } from '../models/events/entityEventArgs';

@Injectable()
export class CateogoryService extends BaseAdminService<Category, CategoryResponse> {

    constructor(
        urls: Urls,
        rest: RestDatasource,
        @Inject(Entity_Changed) entityChanged: Observer<EntityEventArgs>) {

        super(rest, entityChanged);
        this.getAllUrl = urls.categories;
        this.getOneUrl = urls.category;
    }
}
