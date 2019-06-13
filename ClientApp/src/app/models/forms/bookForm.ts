import { Validators } from '@angular/forms';

import { EntityType } from '../../enums/entityType';
import { RangeValidator } from './range.formvalidator';
import { Book } from '../../data/book';
import { CustomFormGroup, CustomFormControl } from './customFormControl';
import { ModelErrors } from './modelErrors';
import { BookDTO } from '../../data/DTO/bookDTO';
import { IPropertyName } from './ipropertyName';

export class BookFormGroup extends CustomFormGroup implements IPropertyName<BookDTO> {
    constructor(
        book: Book) {

        super();
        this._me = new ModelErrors();
        this.addControl(this.getPropertyName("title"),
            new CustomFormControl(book.title,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название книги",
                this.getPropertyName("title"),
                EntityType.Book,
                this._me));

        this.addControl(this.getPropertyName("authors"),
            new CustomFormControl(book.authors,
                Validators.required,
                "Авторы",
                this.getPropertyName("authors"),
                EntityType.Book,
                this._me));


        this.addControl(this.getPropertyName("language"),
            new CustomFormControl(book.language,
                Validators.required,
                "Язык",
                this.getPropertyName("language"),
                EntityType.Book,
                this._me));

        this.addControl(this.getPropertyName("year"),
            new CustomFormControl(book.year,
                undefined,
                "Дата публикации",
                this.getPropertyName("year"),
                EntityType.Book,
                this._me));


        this.addControl(this.getPropertyName("pageCount"),
            new CustomFormControl(book.pageCount,
                undefined,
                "Количество сраниц",
                this.getPropertyName("pageCount"),
                EntityType.Book,
                this._me));

        this.addControl(this.getPropertyName("price"),
            new CustomFormControl(book.price,
                undefined,
                "Цена",
                this.getPropertyName("price"),
                EntityType.Book,
                this._me));

        //this.addControl(nh.nameof<Book>("category"),
        //    new CustomFormControl(book.title,
        //        undefined,
        //        "Категория",
        //        nh.nameof<Book>("category"),
        //        EntityType.Book,
        //        this._me));

        //this.addControl("subcategory",
        //    new CustomFormControl(book.title,
        //        undefined,
        //        "Подкатегория",
        //        "subcategory",
        //        EntityType.Book,
        //        this._me));

        //this.addControl(this.getPropertyName("publisher"),
        //    new CustomFormControl(book.title,
        //        undefined,
        //        "Издательство",
        //        this.getPropertyName("publisher"),
        //        EntityType.Book,
        //        this._me));

        this.addControl(this.getPropertyName("description"),
            new CustomFormControl(book.description,
                Validators.compose([Validators.required, RangeValidator.range(3, 1000)]),
                "Описание",
                this.getPropertyName("description"),
                EntityType.Book,
                this._me));
    }

    private _me: ModelErrors;

    getPropertyName(key: keyof BookDTO): keyof BookDTO {
        return key;
    }
}
