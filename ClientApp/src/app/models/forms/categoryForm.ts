import { Validators } from '@angular/forms';

import { EntityType } from '../../enums/entityType';
import { RangeValidator } from './range.formvalidator';
import { Category } from '../../data/category';
import { CategoryDTO } from '../../data/DTO/categoryDTO';
import { CustomFormControl, CustomFormGroup } from './customFormControl';
import { ModelErrors } from './modelErrors';
import { IPropertyName } from './ipropertyName';

export class CategoryFormGroup extends CustomFormGroup implements IPropertyName<CategoryDTO> {
    constructor(
        category: Category) {

        super();

        this._me = new ModelErrors();

        this.addControl(this.getPropertyName("id"),
            new CustomFormControl(category.id,
                undefined,
                "ID",
                this.getPropertyName("id"),
                EntityType.Category,
                this._me));

        this.addControl(this.getPropertyName("parentCategoryID"),
            new CustomFormControl(category.parentCategoryID,
                undefined,
                "Родительская категория",
                this.getPropertyName("parentCategoryID"),
                EntityType.Category,
                this._me));


        this.addControl(this.getPropertyName("name"),
            new CustomFormControl(category.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название категории",
                this.getPropertyName("name"),
                EntityType.Category,
                this._me));

    }

    private _me: ModelErrors;

    getPropertyName(key: keyof CategoryDTO): keyof CategoryDTO {
        return key;
    }
}
