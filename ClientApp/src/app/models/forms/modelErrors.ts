import { NameOfHelper } from '../../helpers/nameofHelper';
import { EntityType } from '../../enums/entityType';
import { ErrorAttributes } from '../../enums/errorAttributes';
import { Payment, Order } from '../../data/order';
import { Publisher } from '../../data/publisher';
import { Book } from '../../data/book';
import { Category } from '../../data/category';

export class ModelErrors {

    private _nh: NameOfHelper = new NameOfHelper();

    getValidationErrors(entityType: EntityType, property: string,
        errorAttribute: string): string {
        switch (entityType) {
            case EntityType.Publisher:
                return this.getPublishersValidationErrors(property, errorAttribute);
            case EntityType.Category:
                return this.getCategoriesValidationErrors(property, errorAttribute);
            case EntityType.Book:
                return this.getBooksValidationErrors(property, errorAttribute);
            case EntityType.Order:
                return this.getOrdersValidationErrors(property, errorAttribute);
        }
    }

    private getPublishersValidationErrors(property: string, errorAttribute: string): string {
        let msg: string = null;

        if (property == this._nh.nameof<Publisher>("name")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите название издательства";
        }
        else if (property == this._nh.nameof<Publisher>("name")
            && errorAttribute == ErrorAttributes.range) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }
        else if (property == this._nh.nameof<Publisher>("country")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите название страны нахождения издательства";
        }
        else if (property == this._nh.nameof<Publisher>("country")
            && errorAttribute == ErrorAttributes.range) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }

        return msg;
    }

    private getCategoriesValidationErrors(property: string, errorAttribute: string): string {
        let msg: string = null;

        if (property == this._nh.nameof<Category>("name")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите название категории/подкатегории";
        }
        else if (property == this._nh.nameof<Category>("name")
            && errorAttribute == ErrorAttributes.range) {
            msg = "Название должно быть не меньше 2 и не больше 100 символов";
        }

        return msg;
    }

    private getBooksValidationErrors(property: string, errorAttribute: string): string {
        let msg: string = null;

        if (property == this._nh.nameof<Book>("title")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите название книги";
        }
        else if (property == this._nh.nameof<Book>("title")
            && errorAttribute == ErrorAttributes.range) {
            msg = "Название должно быть не меньше 2 и не больше 250 символов";
        }
        else if (property == this._nh.nameof<Book>("authors")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите автора или авторов";
        }
        else if (property == this._nh.nameof<Book>("language")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите язык книги";
        }
        if (property == this._nh.nameof<Book>("description")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Добавьте какое либо описание книги";
        }
        else if (property == this._nh.nameof<Book>("description")
            && errorAttribute == ErrorAttributes.range) {
            msg = "Название должно быть не меньше 2 и не больше 1000 символов";
        }

        return msg;
    }

    private getOrdersValidationErrors(property: string, errorAttribute: string): string {
        let msg: string = null;

        if (property == this._nh.nameof<Order>("name")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Введите ваше имя";
        }
        else if (property == this._nh.nameof<Order>("address")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите адрес доставки";
        }
        else if (property == this._nh.nameof<Payment>("cardNumber")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Введите номер банковской карты";
        }
        else if (property == this._nh.nameof<Payment>("cardExpiry")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Введите срок окончания банковской карты";
        }
        if (property == this._nh.nameof<Payment>("cardSecurityCode")
            && errorAttribute == ErrorAttributes.required) {
            msg = "Укажите код безопасности карты";
        }

        return msg;
    }
}
