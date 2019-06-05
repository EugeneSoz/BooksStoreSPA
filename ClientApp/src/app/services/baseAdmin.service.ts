import { Subject } from 'rxjs';

import { RestDatasource } from '../helpers/restDatasource';
import { QueryOptions } from '../models/dataDTO/queryOptions';
import { PagedResponse } from '../models/dataDTO/pagedResponse';
import { Pagination } from '../models/pagination';
import { FilterProperty, FilterProperties } from '../viewModels/filterProperty';

export class BaseAdminService<TEntity, TEntities> {
    constructor(
        private _rest: RestDatasource) {

        this._queryOptions = new QueryOptions();
        this._queryOptions.resetToDefault();
    }

    protected getOneUrl: string;
    protected getAllUrl: string;
    protected createUrl: string;
    protected updateUrl: string;
    protected deleteUrl: string;
    protected fitlerPropUrl: string;
    protected sortingPropUrl: string;

    entityChanged: Subject<boolean> = new Subject<boolean>();
    entities: Array<TEntities> = null;
    protected _queryOptions: QueryOptions = null;
    private _entity: TEntity = null;
    pagination: Pagination = null;
    pageNumbers: Array<number>;
    errors: Array<string> = null;

    sortPropertyName: string;
    searchTerm: string = null;

    filterProps: Array<FilterProperty> = null;

    get entity(): TEntity {
        return this._entity;
    }

    set entity(value: TEntity) {
        this._entity = value;
        let changed: boolean = value == null ? false : true;
        this.entityChanged.next(changed);
    }

    getEntities(): void {
        this._rest.receiveAll<PagedResponse<TEntities>, QueryOptions>(this.getAllUrl, this._queryOptions)
            .subscribe(result => {
                this.entities = result.entities;
                this.pagination = result.pagination;
                this.pageNumbers = result.pageNumbers;
            });
    }

    getEntity(id: number): void {
        this._rest.getOne<TEntity>(`${this.getOneUrl}/${id}`)
            .subscribe(result => {
                this.entity = result;
            });
    }

    getFilterProps(): void {
        this._rest.getAll<FilterProperty[]>(this.fitlerPropUrl)
            .subscribe(result => this.filterProps = result);
    }

    createEntity(model: TEntity): void {
        this._rest.create<TEntity>(`${this.createUrl}`, model)
            .subscribe((result: boolean) => {},
            (errors) => this.errors = <string[]>errors);
    }

    updateEntity(model: TEntity): void {
        this._rest.update<TEntity>(`${this.updateUrl}`, model)
            .subscribe((result: boolean) => { },
            (errors) => this.errors = <string[]>errors);
    }

    deleteEntity(model: TEntity): void {
        this._rest.delete<TEntity>(this.deleteUrl, model)
            .subscribe((result: boolean) => {
                if (result) {
                    this.entity = null;
                    this.getEntities();
                }
            });
    }

    search(options: QueryOptions): void {
        this._queryOptions.currentPage = 1;
        this._queryOptions.searchPropertyNames = options.searchPropertyNames;
        this._queryOptions.searchTerm = options.searchTerm;
        this.searchTerm = options.searchTerm;

        this.getEntities();
    }

    sort(options: QueryOptions): void {
        this._queryOptions.sortPropertyName = options.sortPropertyName;
        this._queryOptions.descendingOrder = options.descendingOrder;
        this.sortPropertyName = options.sortPropertyName;

        this.getEntities();
    }

    changePage(newPage: number): void {
        this._queryOptions.currentPage = newPage;
        this.getEntities();
    }

    resetQueryOptionsToDefault(): void {
        this._queryOptions.resetToDefault();
    }
}
