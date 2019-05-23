import { BaseAdminService } from '../services/baseAdmin.service';
import { Pagination } from '../models/pagination';
import { FilterProperty } from './filterProperty';
import { QueryOptions } from '../models/dataDTO/queryOptions';
import { EntityType } from '../enums/entityType';
import { DeleteMessageComponent } from '../components/modals/delete-message.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

export class BaseSelection<TEntity, TEntities> {
    constructor(
        private _service: BaseAdminService<TEntity, TEntities>,
        fprop: Array<FilterProperty>,
        sprop: Array<FilterProperty>,
        entityType: EntityType,
        modalService: BsModalService) {

        this.filterProperties = fprop;
        this.sortingProperties = sprop;
        this._entityType = entityType;
        this._modalService = modalService;
    }

    private _entityType: EntityType;
    private _modalService: BsModalService;
    protected subscription: Subscription = new Subscription();
    filterProperties: Array<FilterProperty>;
    sortingProperties: Array<FilterProperty>;

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
        this.subscription.unsubscribe();
    }
}
