import { Publisher } from '../models/dataDTO/publisher';
import { Category } from '../models/dataDTO/category';
import { BookResponse } from '../models/dataDTO/bookResponse';

export class FilterProperty {
    constructor(
        public property: string,
        public name: string) { }
}

export class FilterProperties {
    getPublishersProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<Publisher>("name"), "Издательство"));
    }

    getCategoriesProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<Category>("name"), "Категория"),
            new FilterProperty(`s_${this.nameof<Category>("name")}`, "Подкатегория"));
    }

    getBooksProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<BookResponse>("title"), "Название"),
            new FilterProperty(this.nameof<BookResponse>("parentCategoryName"), "Категория"),
            new FilterProperty(this.nameof<BookResponse>("categoryName"), "Подкатегория"),
            new FilterProperty(this.nameof<BookResponse>("publisherName"), "Издательство"),
            new FilterProperty(this.nameof<BookResponse>("price"), "Цена"));
    }

    private nameof<T>(key: keyof T, instance?: T): keyof T {
        return key;
    }
}

export class SortingProperties {
    getPublishersProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<Publisher>("id"), "ID"),
            new FilterProperty(this.nameof<Publisher>("name"), "Издательство"),
            new FilterProperty(this.nameof<Publisher>("country"), "Страна нахождения издательства"));
    }

    getCategoriesProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<Category>("id"), "ID"),
            new FilterProperty(this.nameof<Category>("name"), "Категория/Подкатегория"));
    }

    getBooksProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<BookResponse>("id"), "ID"),
            new FilterProperty(this.nameof<BookResponse>("title"), "Название"),
            new FilterProperty(this.nameof<BookResponse>("parentCategoryName"), "Категория"),
            new FilterProperty(this.nameof<BookResponse>("categoryName"), "Подкатегория"),
            new FilterProperty(this.nameof<BookResponse>("publisherName"), "Издательство"),
            new FilterProperty(this.nameof<BookResponse>("price"), "Цена"));
    }

    private nameof<T>(key: keyof T, instance?: T): keyof T {
        return key;
    }
}
