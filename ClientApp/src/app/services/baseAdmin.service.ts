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
    pageNumbers: Array<number>;

    sortPropertyName: string;
    searchTerm: string = null;

    get entities(): PagedResponse<TEntities> {
        return this._entities;
    }

    set entities(value: PagedResponse<TEntities>) {
        if (value != undefined || value != null) {
            this._entities = value;
            //создать класс Pagination
            this.pagination = new Pagination(value.currentPage, value.pageSize, value.totalPages,
                value.hasPreviousPage, value.hasNextPage, value.leftBoundary, value.rightBoundary);
            //создать массив из которого будет строиться компонент Pagination
            let array: Array<number> = new Array<number>();

            for (let i = this.pagination.leftBoundary; i <= this.pagination.rightBoundary; i++) {
                array.push(i);
            }

            this.pageNumbers = array;
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

    search(options: QueryOptions): void {
        this.queryOptions.currentPage = 1;
        this.queryOptions.searchPropertyName = options.searchPropertyName;
        this.queryOptions.searchTerm = options.searchTerm;
        this.searchTerm = options.searchTerm;

        this.getEntities();
    }

    sort(options: QueryOptions): void {
        this.queryOptions.sortPropertyName = options.sortPropertyName;
        this.queryOptions.descendingOrder = options.descendingOrder;
        this.sortPropertyName = options.sortPropertyName;

        this.getEntities();
    }
}
