import { CustomFormGroup, CustomFormControl } from './form';
import { Validators } from '@angular/forms';

import { NameOfHelper } from '../../helpers/nameofHelper';
import { EntityType } from '../../enums/entityType';
import { ValidationErrors } from "./validationErrors";
import { RangeValidator } from './range.formvalidator';
import { Category } from '../../data/category';
import { CategoryDTO } from '../../data/DTO/categoryDTO';

export class CategoryFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, category: Category) {

        super();
        this._ve = new ValidationErrors();
        this.addControl(nh.nameof<CategoryDTO>("id"),
            new CustomFormControl(category.id,
                undefined,
                "ID",
                nh.nameof<CategoryDTO>("id"),
                EntityType.Category,
                this._ve));

        this.addControl(nh.nameof<CategoryDTO>("parentCategoryID"),
            new CustomFormControl(category.parentCategoryID,
                undefined,
                "Родительская категория",
                nh.nameof<CategoryDTO>("parentCategoryID"),
                EntityType.Category,
                this._ve));


        this.addControl(nh.nameof<CategoryDTO>("name"),
            new CustomFormControl(category.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название категории",
                nh.nameof<Category>("name"),
                EntityType.Category,
                this._ve));

    }

    private _ve: ValidationErrors;
}
