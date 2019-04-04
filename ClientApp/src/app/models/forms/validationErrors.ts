import { NameOfHelper } from '../../helpers/nameofHelper';
import { Publisher } from '../dataDTO/publisher';
import { EntityType } from '../../enums/entityType';
import { ErrorAttributes } from '../../enums/errorAttributes';
import { Category } from '../dataDTO/category';
import { Book } from '../dataDTO/book';

export class ValidationErrors {

    private _nameofHelper: NameOfHelper = new NameOfHelper();

    getValidationErrors(entityType: EntityType, property: string,
        errorName: string): string {
        switch (entityType) { 
            case EntityType.Publisher:
                return this.getPublishersValidationErrors(property, errorName);
            case EntityType.Category:
                return this.getCategoriesValidationErrors(property, errorName);
            case EntityType.Book:
                return this.getBooksValidationErrors(property, errorName);
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

    private getCategoriesValidationErrors(property: string, errorName: string): string {
        let msg: string = null;

        if (property == this._nameofHelper.nameof<Category>("name")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите название категории/подкатегории";
        }
        else if (property == this._nameofHelper.nameof<Category>("name")
            && errorName == ErrorAttributes.minlength) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }

        return msg;
    }

    private getBooksValidationErrors(property: string, errorName: string): string {
        let msg: string = null;

        if (property == this._nameofHelper.nameof<Book>("title")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите название книги";
        }
        else if (property == this._nameofHelper.nameof<Book>("title")
            && errorName == ErrorAttributes.minlength) {
            msg = "Название должно быть не меньше 2 и не больше 250 символов";
        }
        else if (property == this._nameofHelper.nameof<Book>("authors")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите автора или авторов";
        }
        else if (property == this._nameofHelper.nameof<Book>("language")
            && errorName == ErrorAttributes.required) {
            msg = "Укажите язык книги";
        }
        if (property == this._nameofHelper.nameof<Book>("description")
            && errorName == ErrorAttributes.required) {
            msg = "Добавьте какое либо описание книги";
        }
        else if (property == this._nameofHelper.nameof<Book>("description")
            && errorName == ErrorAttributes.minlength) {
            msg = "Название должно быть не меньше 2 и не больше 1000 символов";
        }

        return msg;
    }
}
