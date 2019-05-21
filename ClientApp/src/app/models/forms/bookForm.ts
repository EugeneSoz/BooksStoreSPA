import { CustomFormGroup, CustomFormControl } from './form';
import { Validators } from '@angular/forms';

import { NameOfHelper } from '../../helpers/nameofHelper';
import { EntityType } from '../../enums/entityType';
import { ValidationErrors } from "./validationErrors";
import { Book } from '../dataDTO/book';
import { RangeValidator } from './range.formvalidator';

export class BookFormGroup extends CustomFormGroup {
    constructor(
        nh: NameOfHelper, book: Book) {

        super();
        this._ve = new ValidationErrors();
        this.addControl(nh.nameof<Book>("title"),
            new CustomFormControl(book.title,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название книги",
                nh.nameof<Book>("title"),
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("authors"),
            new CustomFormControl(book.authors,
                Validators.required,
                "Авторы",
                nh.nameof<Book>("authors"),
                EntityType.Book,
                this._ve));


        this.addControl(nh.nameof<Book>("language"),
            new CustomFormControl(book.language,
                Validators.required,
                "Язык",
                nh.nameof<Book>("language"),
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("year"),
            new CustomFormControl(book.year,
                undefined,
                "Дата публикации",
                nh.nameof<Book>("year"),
                EntityType.Book,
                this._ve));


        this.addControl(nh.nameof<Book>("pageCount"),
            new CustomFormControl(book.pageCount,
                undefined,
                "Количество сраниц",
                nh.nameof<Book>("pageCount"),
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("price"),
            new CustomFormControl(book.price,
                undefined,
                "Цена",
                nh.nameof<Book>("price"),
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("category"),
            new CustomFormControl(book.title,
                undefined,
                "Категория",
                nh.nameof<Book>("category"),
                EntityType.Book,
                this._ve));

        this.addControl("subcategory",
            new CustomFormControl(book.title,
                undefined,
                "Подкатегория",
                "subcategory",
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("publisher"),
            new CustomFormControl(book.title,
                undefined,
                "Издательство",
                nh.nameof<Book>("publisher"),
                EntityType.Book,
                this._ve));

        this.addControl(nh.nameof<Book>("description"),
            new CustomFormControl(book.description,
                Validators.compose([Validators.required, RangeValidator.range(3, 1000)]),
                "Описание",
                nh.nameof<Book>("description"),
                EntityType.Book,
                this._ve));
    }

    private _ve: ValidationErrors;
}
