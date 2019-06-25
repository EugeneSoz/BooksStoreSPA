import { Validators } from '@angular/forms';

import { CustomFormGroup, CustomFormControl } from './custom-form-control.model';
import { ModelErrors } from '../validation/model-errors.model';
import { BookDTO } from '../domain/DTO/bookDTO.model';
import { EntityType } from '../enums/entity-type.enum';
import { RangeValidator } from '../validation/range.formvalidator';
import { NotNullMinValidator } from '../validation/notNullMin.formvalidator';
import { nameof } from '../../core/shared/helper-functions';

export class BookFormGroup extends CustomFormGroup {
    constructor(
        book: BookDTO) {

        super();
        this._me = new ModelErrors();
        this.addControl(nameof<BookDTO>("id"),
            new CustomFormControl(book.id,
                undefined,
                "ID",
                nameof<BookDTO>("id"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("title"),
            new CustomFormControl(book.title,
                Validators.compose([Validators.required, RangeValidator.range(3, 100)]),
                "Название книги",
                nameof<BookDTO>("title"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("authors"),
            new CustomFormControl(book.authors,
                Validators.required,
                "Авторы",
                nameof<BookDTO>("authors"),
                EntityType.Book,
                this._me));


        this.addControl(nameof<BookDTO>("language"),
            new CustomFormControl(book.language,
                Validators.required,
                "Язык",
                nameof<BookDTO>("language"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("year"),
            new CustomFormControl(book.year,
                undefined,
                "Дата публикации",
                nameof<BookDTO>("year"),
                EntityType.Book,
                this._me));


        this.addControl(nameof<BookDTO>("pageCount"),
            new CustomFormControl(book.pageCount,
                undefined,
                "Количество сраниц",
                nameof<BookDTO>("pageCount"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("price"),
            new CustomFormControl(book.price,
                undefined,
                "Цена",
                nameof<BookDTO>("price"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("categoryID"),
            new CustomFormControl(book.categoryID,
                NotNullMinValidator.notNullMin(1),
                "Категория",
                nameof<BookDTO>("categoryID"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("publisherID"),
            new CustomFormControl(book.publisherID,
                NotNullMinValidator.notNullMin(1),
                "Издательство",
                nameof<BookDTO>("publisherID"),
                EntityType.Book,
                this._me));

        this.addControl(nameof<BookDTO>("description"),
            new CustomFormControl(book.description,
                Validators.compose([Validators.required, RangeValidator.range(3, 1000)]),
                "Описание",
                nameof<BookDTO>("description"),
                EntityType.Book,
                this._me));
    }

    private _me: ModelErrors;
}
