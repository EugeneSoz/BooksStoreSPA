import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryFormGroup } from '../../../models/forms/categoryForm';
import { BaseForm } from '../../../viewModels/baseForm';
import { Category } from '../../../models/dataDTO/category';
import { NameOfHelper } from '../../../helpers/nameofHelper';
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
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new CategoryFormGroup(this._nh, this.category);
    }

    get formTitle(): string {
        return `${this.title} ${this._categoryService.categoryActions ? "категорию" : "подкатегорию"}`;
    }

    category: Category = new Category();

    get errors(): Array<string> {
        return this._categoryService.errors;
    }

    ngOnInit(): void {
        this._subscription.add(
            this._categoryService.entityChanged.subscribe(changed => {
                if (changed) {
                    Object.assign(this.category, this._categoryService.entity);
                    this.form = new CategoryFormGroup(this._nh, this.category);
                }
            }));
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
