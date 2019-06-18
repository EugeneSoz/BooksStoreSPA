import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { BookService } from '../../../services/book.services';
import { BookFormGroup } from '../../../models/forms/bookForm';
import { Book } from '../../../data/book';
import { BaseAdminFormComponent } from '../../../models/forms/baseAdminFormComponent';
import { PageLink } from '../../../enums/pageLink';
import { Publisher } from '../../../data/publisher';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    providers: [BookService]
})
export class BookFormComponent extends BaseAdminFormComponent<BookFormGroup> implements OnInit {
    constructor(
        private _bookService: BookService,
        activeRoute: ActivatedRoute) {

        super(activeRoute);
        this.form = new BookFormGroup(this.book);
        this.link = `/${PageLink.admin_books}`;
    }

    book: Book = new Book();
    private publisherId: number = 0;
    publisherName: string = "";
    private categoryId: number = 0;
    private categoryName: string = "";

    publishers$: Observable<Array<Publisher>> = null;
    private searchTerms: Subject<string> = new Subject<string>();

    get errors(): Array<string> {
        return this._bookService.errors;
    }

    ngOnInit(): void {
        this._subscriptions.push(
            this._bookService.entityChanged.subscribe(changed => {
                if (changed) {
                    Object.assign(this.book, this._bookService.entity);
                    this.form = new BookFormGroup(this.book);
                }
            }));

        this.publishers$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this._bookService.searchSelectablePublishers(term))
        );

        if (this._id != 0) {
            this._bookService.getEntity(this._id);
        }
    }

    onCategoryPublisherChanged(value: string): void {
        this.publisherName = <string>value;
        this.searchTerms.next(this.publisherName);
    } 

    onSubmit(): void {
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
