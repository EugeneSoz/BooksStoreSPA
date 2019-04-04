import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CategoryFormGroup } from '../../../models/forms/categoryForm';
import { BaseForm } from '../../../viewModels/baseForm';
import { Category } from '../../../models/dataDTO/category';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { EntityEventArgs, Entity_Changed } from '../../../models/events/entityEventArgs';
import { CategoryService } from '../../../services/category.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    providers: [CategoryService]
})
export class CategoryFormComponent extends BaseForm<CategoryFormGroup> implements OnInit {
    constructor(
        private _categoryService: CategoryService,
        private _nh: NameOfHelper,
        @Inject(Entity_Changed) private entityChanged: Observable<EntityEventArgs>,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new CategoryFormGroup(this._nh, this.category);
        this.entityChanged.subscribe(changed => {
            if (changed) {
                Object.assign(this.category, _categoryService.entity);
                this.form = new CategoryFormGroup(this._nh, this.category);
            }
        });
    }

    category: Category = new Category();

    get errors(): Array<string> {
        return this._categoryService.errors;
    }

    ngOnInit(): void {
        if (this._id != null) {
            this._categoryService.getEntity(this._id);
        }
    }

    submitForm(): void {
        if (this.form.valid) {
            this.category.name = "";// this.form.get(this._nh.nameof<Publisher>("name")).value;
            this.category.parentCategoryID = null;// this.form.get(this._nh.nameof<Publisher>("country")).value;

            if (this.editing) {
                this._categoryService.updateEntity(this.category);
            }
            else {
                this._categoryService.createEntity(this.category)
            }
            this.form.reset();
        }
    }
}
