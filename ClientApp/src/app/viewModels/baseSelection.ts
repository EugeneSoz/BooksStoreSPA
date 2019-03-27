import { BaseAdminService } from '../services/baseAdmin.service';
import { PagedResponse } from '../models/dataDTO/pagedResponse';
import { Pagination } from '../models/pagination';
import { FilterProperty } from './filterProperty';
import { QueryOptions } from '../models/dataDTO/queryOptions';

export class BaseSelection<TEntity, TEntities> {
    constructor(
        private _service: BaseAdminService<TEntity, TEntities>, fprop: Array<FilterProperty>,
        sprop: Array<FilterProperty>) {

        this.filterProperties = fprop;
        this.sortingProperties = sprop;
    }

    filterProperties: Array<FilterProperty>;
    sortingProperties: Array<FilterProperty>;

    get adminEntities(): PagedResponse<TEntities> {
        return this._service.entities;
    }

    get pagination(): Pagination {
        return this._service.pagination;
    }

    get pageNumbers(): Array<number> {
        return this._service.pageNumbers;
    }

    get searchTerm(): string {
        return this._service.searchTerm;
    }

    get sortPropertyName(): string {
        return this._service.sortPropertyName;
    }

    ngOnInit(): void {
        this._service.getEntities();
    }

    onChangePage(newPage: number): void {
        this._service.queryOptions.currentPage = newPage;
        this._service.getEntities();
    }

    onSearch(options: QueryOptions): void {
        this._service.search(options);
    }

    onSort(options: QueryOptions): void {
        this._service.sort(options);
    }

    ngOnDestroy(): void {
        this._service.queryOptions.resetToDefault();
    }
}
