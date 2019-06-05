import { Publisher } from '../models/dataDTO/publisher';
import { BookResponse } from '../models/dataDTO/bookResponse';
import { CategoryResponse } from '../models/dataDTO/categoryResponse';

export class FilterProperty {
    constructor(
        public propertyName: string,
        public displayName: string) { }
}

export class FilterProperties {
    getPublishersProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<Publisher>("name"), "Издательство"),
            new FilterProperty(this.nameof<Publisher>("country"), "Страна нахождения"));
    }

    getCategoriesProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<CategoryResponse>("name"), "Категория"));
    }

    getBooksProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<BookResponse>("title"), "Название"),
            new FilterProperty(this.nameof<BookResponse>("categoryName"), "Категория"),
            new FilterProperty(this.nameof<BookResponse>("subcategoryName"), "Подкатегория"),
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
            new FilterProperty(this.nameof<CategoryResponse>("id"), "ID"),
            new FilterProperty(this.nameof<CategoryResponse>("name"), "Категория"))
    }

    getBooksProp(): Array<FilterProperty> {
        return new Array<FilterProperty>(
            new FilterProperty(this.nameof<BookResponse>("id"), "ID"),
            new FilterProperty(this.nameof<BookResponse>("title"), "Название"),
            new FilterProperty(this.nameof<BookResponse>("categoryName"), "Категория"),
            new FilterProperty(this.nameof<BookResponse>("subcategoryName"), "Подкатегория"),
            new FilterProperty(this.nameof<BookResponse>("publisherName"), "Издательство"),
            new FilterProperty(this.nameof<BookResponse>("price"), "Цена"));
    }

    private nameof<T>(key: keyof T, instance?: T): keyof T {
        return key;
    }
}
