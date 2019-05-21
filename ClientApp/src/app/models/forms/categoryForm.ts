import { CustomFormGroup, CustomFormControl } from './form';
import { Validators } from '@angular/forms';

import { Category } from '../dataDTO/category';
import { NameOfHelper } from '../../helpers/nameofHelper';
import { EntityType } from '../../enums/entityType';
import { ValidationErrors } from "./validationErrors";
import { RangeValidator } from './range.formvalidator';

export class CategoryFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, category: Category) {

        super();
        this._ve = new ValidationErrors();
        this.addControl(nh.nameof<Category>("parentCategoryID"),
            new CustomFormControl(category.parentCategoryID,
                undefined,
                "Родительская категория",
                nh.nameof<Category>("parentCategoryID"),
                EntityType.Category,
                this._ve));

        this.addControl(nh.nameof<Category>("name"),
            new CustomFormControl(category.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название категории",
                nh.nameof<Category>("name"),
                EntityType.Publisher,
                this._ve));
    }

    private _ve: ValidationErrors;
}
