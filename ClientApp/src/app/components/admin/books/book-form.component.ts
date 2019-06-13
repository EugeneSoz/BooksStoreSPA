import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../../services/book.services';
import { BookFormGroup } from '../../../models/forms/bookForm';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { BaseForm } from '../../../models/baseForm';
import { Book } from '../../../data/book';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    providers: [BookService]
})
export class BookFormComponent extends BaseForm<BookFormGroup> implements OnInit {
    constructor(
        private _bookService: BookService,
        private _nh: NameOfHelper,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new BookFormGroup(this.book);
    }

    book: Book = new Book();

    get errors(): Array<string> {
        return this._bookService.errors;
    }

    ngOnInit(): void {
        this._subscription.add(
            this._bookService.entityChanged.subscribe(changed => {
                if (changed) {
                    Object.assign(this.book, this._bookService.entity);
                    this.form = new BookFormGroup(this.book);
                }
            }));
        if (this._id != null) {
            this._bookService.getEntity(this._id);
        }
    }

    submitForm(): void {
        if (this.form.valid) {
            this.book.title = "";// this.form.get(this._nh.nameof<Publisher>("name")).value;
            this.book.authors = null;// this.form.get(this._nh.nameof<Publisher>("country")).value;

            if (this.editing) {
                this._bookService.updateEntity(this.book);
            }
            else {
                this._bookService.createEntity(this.book)
            }
            this.form.reset();
        }
    }
}
