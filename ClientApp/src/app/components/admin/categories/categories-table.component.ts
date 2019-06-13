import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CategoryService } from '../../../services/category.service';
import { EntityType } from '../../../enums/entityType';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageLink } from '../../../enums/pageLink';
import { BaseTable } from '../../../models/baseSelection';
import { Category } from '../../../data/category';
import { CategoryResponse } from '../../../data/DTO/categoryResponse';
import { CategoryDTO } from '../../../data/DTO/categoryDTO';
import { EntityExtensions } from '../../../infrastructure/entityExtensions';
import { DeleteMessageComponent } from '../../modals/delete-message.component';

@Component({
    templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent extends BaseTable<Category, CategoryResponse, CategoryDTO>
    implements OnInit, OnDestroy {

    constructor(
        categoryService: CategoryService,
        private modalService: BsModalService) {

        super(categoryService, EntityType.Category, modalService, `/${PageLink.admin_categories}`);
    }

    categoryDTO: CategoryDTO = null;
    modalRef: BsModalRef = null;

    onShowDeleteModal(category: Category): void {
        let ee: EntityExtensions = new EntityExtensions();
        this.categoryDTO = ee.mapCategoryDTO(category);
        const initialState = {
            entityType: EntityType.Category,
            objectName: category.displayedName
        }

        this._subscriptions.push(
            this.modalService.onHide.subscribe(() => {
                if (this.modalRef != null &&
                    (this.modalRef.content as DeleteMessageComponent).result == "delete") {
                    this._service.deleteEntity(this.categoryDTO);
                }
                this.unsubscribe();
            })
        );

        this.modalRef = this.modalService.show(DeleteMessageComponent, { initialState });
    }

    unsubscribe(): void {
        this._subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
        this._subscriptions = new Array<Subscription>();
    }
}
