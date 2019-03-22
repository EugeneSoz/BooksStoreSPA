import { RestDatasource } from '../helpers/restDatasource';
import { QueryOptions } from '../models/dataDTO/queryOptions';
import { PagedResponse } from '../models/dataDTO/pagedResponse';
import { HttpMethod } from '../enums/httpMethods';
import { Pagination } from '../models/pagination';

export class BaseAdminService<TEntity, TEntities> {
    constructor(
        private _rest: RestDatasource) {

        this.queryOptions = new QueryOptions();
        this.queryOptions.resetToDefault();
    }

    protected getOneUrl: string;
    protected getAllUrl: string;

    private _entities: PagedResponse<TEntities> = null;
    queryOptions: QueryOptions = null;
    entity: TEntity = null;
    pagination: Pagination = null;

    get entities(): PagedResponse<TEntities> {
        return this._entities;
    }

    set entities(value: PagedResponse<TEntities>) {
        if (value != undefined || value != null) {
            this._entities = value;
            this.pagination = new Pagination(value.currentPage, value.pageSize, value.totalPages,
                value.hasPreviousPage, value.hasNextPage, value.leftBoundary, value.rightBoundary);
        }
    }

    getEntities(): void {
        this._rest.receiveAll<PagedResponse<TEntities>>(this.getAllUrl, this.queryOptions)
            .subscribe(response => {
                this.entities = this._rest.getResponseBody(response, HttpMethod.POSTGET);
            });
    }

    getEntity(id: number): void {
        this._rest.getAll<TEntity>(`${this.getOneUrl}/${id}`)
            .subscribe(response => {
                this.entity = this._rest.getResponseBody(response, HttpMethod.GET);
            });
    }
}
