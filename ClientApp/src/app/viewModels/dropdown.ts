import { BookResponse } from '../models/dataDTO/bookResponse';
import { BooksGridType } from '../enums/bookGridType';

//класс содержит элементы списка в панели Toolbar
export class ListItem {
    constructor(
        public propertyName: string,
        public name: string,
        public descendingOrder: boolean = false,
        public hasDivider: boolean = false,
        public href: string = "#") { }
}

export class Dropdown {
    storeSorting: Array<ListItem>;
    storeView: Array<ListItem>;

    createStoreSorting(): void
    {
        const nameof = <T>(name: keyof T) => name;
        this.storeSorting = new Array<ListItem>(
            new ListItem("", "Сортировать по", false),
            new ListItem(this.nameof<BookResponse>("title"), "Названию: А - Я"),
            new ListItem(nameof<BookResponse>("title"), "Названию: Я - А", true),
            new ListItem(nameof<BookResponse>("price"), "Цене: мин. - макс."),
            new ListItem(nameof<BookResponse>("price"), "Цене: макс. - мин.", true));
    }

    createStoreView(): void
    {
        this.storeView = new Array<ListItem>(
            new ListItem("", "Отобразить", false),
            new ListItem(String(BooksGridType.SixByTwo), "6 x 2"),
            new ListItem(String(BooksGridType.FourByThree), "4 x 3"),
            new ListItem(String(BooksGridType.ThreeByFour), "3 x 4"));
    }

    private nameof<T>(key: keyof T, instance?: T): keyof T {
        return key;
    }
}
