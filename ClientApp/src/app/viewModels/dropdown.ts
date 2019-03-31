import { BookResponse } from '../models/dataDTO/bookResponse';
import { BooksGridType } from '../enums/bookGridType';
import { NameOfHelper } from '../helpers/nameofHelper';

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
        let nameofHelper: NameOfHelper = new NameOfHelper();
        this.storeSorting = new Array<ListItem>(
            new ListItem("", "Сортировать по", false),
            new ListItem(nameofHelper.nameof<BookResponse>("title"), "Названию: А - Я"),
            new ListItem(nameofHelper.nameof<BookResponse>("title"), "Названию: Я - А", true),
            new ListItem(nameofHelper.nameof<BookResponse>("price"), "Цене: мин. - макс."),
            new ListItem(nameofHelper.nameof<BookResponse>("price"), "Цене: макс. - мин.", true));
    }

    createStoreView(): void
    {
        this.storeView = new Array<ListItem>(
            new ListItem("", "Отобразить", false),
            new ListItem(BooksGridType.SixByTwo, "6 x 2 (строка x столбец)"),
            new ListItem(BooksGridType.FourByThree, "4 x 3 (строка x столбец)"),
            new ListItem(BooksGridType.ThreeByFour, "3 x 4 (строка x столбец)"));
    }
}
