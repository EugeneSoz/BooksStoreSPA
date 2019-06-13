import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryFormGroup } from '../../../models/forms/categoryForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { CategoryService } from '../../../services/category.service';
import { CategoryDTO } from '../../../data/DTO/categoryDTO';
import { BaseAdminFormComponent } from '../../../models/forms/baseAdminFormComponent';

@Component({
    templateUrl: './category-form.component.html',
})
export class CategoryFormComponent extends BaseAdminFormComponent<CategoryFormGroup> implements OnInit {
    constructor(
        private _categoryService: CategoryService,
        private _nh: NameOfHelper,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new CategoryFormGroup(this.category);
    }

    category: CategoryDTO = new CategoryDTO();

    get errors(): Array<string> {
        return this._categoryService.errors;
    }

    ngOnInit(): void {
        this._subscriptions.push(
            this._categoryService.entityChanged.subscribe(changed => {
                if (changed) {
                    Object.assign(this.category, this._categoryService.entity);
                    this.form = new CategoryFormGroup(this.category);
                }
            }));
        if (this._id != null) {
            this._categoryService.getEntity(this._id);
        }
    }

    submitForm(): void {
        if (this.form.valid) {
            this.category = this.form.value;
            //this.category.name = this.form.get(this._nh.nameof<Category>("name")).value;
            //this.category.parentCategoryID =
            //    this.form.get(this._nh.nameof<Category>("parentCategoryID")).value;

            if (this.editing) {
                this._categoryService.updateEntity(this.category);
            }
            else {
                this._categoryService.createEntity(this.category)
            }
            this.isAlertVisible = true;
            this.form.reset();
        }
    }
}
