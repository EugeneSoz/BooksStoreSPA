import { Subscription } from 'rxjs';

import { BaseAdminService } from '../services/baseAdmin.service';
import { Pagination } from '../models/pagination';
import { EntityType } from '../enums/entityType';
import { DeleteMessageComponent } from '../components/modals/delete-message.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FilterSortingProps } from '../data/DTO/filterSortingProps';
import { QueryOptions } from '../data/DTO/queryOptions';

export class BaseTable<TEntity, TEntities, TEntityDTO> {
    constructor(
        protected _service: BaseAdminService<TEntity, TEntities, TEntityDTO>,
        entityType: EntityType,
        modalService: BsModalService,
        link: string) {

        this._entityType = entityType;
        this._modalService = modalService;
        this.link = link;
    }

    private _entityType: EntityType;
    private _modalService: BsModalService;
    protected _subscriptions: Array<Subscription> = new Array<Subscription>();

    link: string = null;
    entityId: number = 0;

    get filterProperties(): Array<FilterSortingProps> {
        return this._service.filterProps;
    }

    get sortingProperties(): Array<FilterSortingProps> {
        return this._service.sortingProps;
    }

    get adminEntities(): Array<TEntities> {
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
        this._service.getFilterProps();
        this._service.getSortingProps();
    }

    onChangePage(newPage: number): void {
        this._service.changePage(newPage);
    }

    onSearch(options: QueryOptions): void {
        this._service.search(options);
    }

    onSort(options: QueryOptions): void {
        this._service.sort(options);
    }

    onDelete(id: number): void {
        const initialState = {
            entityType: this._entityType,
            entityId: id
        }
        this._modalService.show(DeleteMessageComponent, { initialState });
    }

    ngOnDestroy(): void {
        //this._service.resetQueryOptionsToDefault();
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
