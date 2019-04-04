import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookService } from '../../../services/book.services';
import { BaseForm } from '../../../viewModels/baseForm';
import { BookFormGroup } from '../../../models/forms/bookForm';
import { Book } from '../../../models/dataDTO/book';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { Entity_Changed, EntityEventArgs } from '../../../models/events/entityEventArgs';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    providers: [BookService]
})
export class BookFormComponent extends BaseForm<BookFormGroup> implements OnInit {
    constructor(
        private _bookService: BookService,
        private _nh: NameOfHelper,
        @Inject(Entity_Changed) private entityChanged: Observable<EntityEventArgs>,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new BookFormGroup(this._nh, this.book);
        this.entityChanged.subscribe(changed => {
            if (changed) {
                Object.assign(this.book, _bookService.entity);
                this.form = new BookFormGroup(this._nh, this.book);
            }
        });
    }

    book: Book = new Book();

    get errors(): Array<string> {
        return this._bookService.errors;
    }

    ngOnInit(): void {
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
