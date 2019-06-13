import { Validators } from "@angular/forms";

import { EntityType } from '../../enums/entityType';
import { RangeValidator } from './range.formvalidator';
import { CustomFormGroup, CustomFormControl } from './customFormControl';
import { ModelErrors } from './modelErrors';
import { PublisherDTO } from '../../data/DTO/publisherDTO';
import { IPropertyName } from './ipropertyName';

export class PublisherFormGroup extends CustomFormGroup implements IPropertyName<PublisherDTO> {
    constructor(
        publisher: PublisherDTO) {

        super();

        this._me = new ModelErrors();

        this.addControl(this.getPropertyName("id"),
            new CustomFormControl(publisher.id,
                undefined,
                "ID",
                this.getPropertyName("id"),
                EntityType.Publisher,
                this._me));

        this.addControl(this.getPropertyName("name"),
            new CustomFormControl(publisher.name,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название издательства",
                this.getPropertyName("name"),
                EntityType.Publisher,
                this._me));

        this.addControl(this.getPropertyName("country"),
            new CustomFormControl(publisher.country,
                Validators.required,
                "Страна нахождения издательства",
                this.getPropertyName("country"),
                EntityType.Publisher,
                this._me));
    }

    private _me: ModelErrors;

    getPropertyName(key: keyof PublisherDTO): keyof PublisherDTO {
        return key;
    }
}
