import { NameOfHelper } from '../../helpers/nameofHelper';
import { Publisher } from '../dataDTO/publisher';
import { EntityType } from '../../enums/entityType';
import { ErrorAttributes } from '../../enums/errorAttributes';

export class ValidationErrors {

    private _nameofHelper: NameOfHelper = new NameOfHelper();

    getValidationErrors(entityType: EntityType, property: string,
        errorName: string): string {
        switch (entityType) { 
            case EntityType.Publisher:
                return this.getPublishersValidationErrors(property, errorName);
        }
    }

    private getPublishersValidationErrors(property: string, errorName: string): string {
        let msg: string = null;

        if (property == this._nameofHelper.nameof<Publisher>("name")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите название издательства";
        }
        else if (property == this._nameofHelper.nameof<Publisher>("name")
            && errorName == ErrorAttributes.minlength) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }
        else if (property == this._nameofHelper.nameof<Publisher>("country")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите название страны нахождения издательства";
        }

        return msg;
    }
}
