import { Injectable, Inject } from "@angular/core";
import { BaseAdminService } from './baseAdmin.service';
import { Publisher } from '../models/dataDTO/publisher';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';
import { EntityEventArgs, Entity_Changed } from '../models/events/entityEventArgs';
import { Observer } from 'rxjs';

@Injectable()
export class PublisherService extends BaseAdminService<Publisher, Publisher> {

    constructor(
        urls: Urls,
        rest: RestDatasource,
        @Inject(Entity_Changed) entityChanged: Observer<EntityEventArgs>) {

        super(rest, entityChanged);
        this.getAllUrl = urls.publishers;
        this.getOneUrl = urls.publisher;
    }
}
