import { Injectable } from "@angular/core";
import { BaseAdminService } from './baseAdmin.service';
import { Publisher } from '../models/dataDTO/publisher';
import { Urls } from '../helpers/urls';
import { RestDatasource } from '../helpers/restDatasource';

@Injectable()
export class PublisherService extends BaseAdminService<Publisher, Publisher> {

    constructor(
        urls: Urls,
        rest: RestDatasource) {

        super(rest);
        this.getAllUrl = urls.publishers;
        this.getOneUrl = urls.publisher;
    }
}
