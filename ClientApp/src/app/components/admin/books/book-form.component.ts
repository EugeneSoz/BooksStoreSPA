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
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { NameOfHelper } from '../../../helpers/nameofHelper';
import { BookDTO } from '../../../data/DTO/bookDTO';
import { AbstractControl } from '@angular/forms';
import { CategoryResponse } from '../../../data/DTO/categoryResponse';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    providers: [BookService]
})
export class BookFormComponent extends BaseAdminFormComponent<BookFormGroup> implements OnInit {
    constructor(
        private _bookService: BookService,
        activeRoute: ActivatedRoute,
        private _nh: NameOfHelper) {

        super(activeRoute);
        this.form = new BookFormGroup(this.book);
        this.link = `/${PageLink.admin_books}`;
    }

    book: BookDTO = new BookDTO();
    private publisherId: number = 0;
    publisherName: string = "";
    private categoryId: number = 0;
    categoryName: string = "";

    publishers$: Observable<Array<Publisher>> = null;
    categories$: Observable<Array<CategoryResponse>> = null;

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

        //для значений выпадающего списка издательств
        this.publishers$ = Observable.create((observer: Subject<string>) => {
            observer.next(this.publisherName);
        })
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((term: string) => this._bookService.searchSelectablePublishers(term)));

        //для значений выпадающего списка категорий
        this.categories$ = Observable.create((observer: Subject<string>) => {
            observer.next(this.categoryName);
        })
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((term: string) => this._bookService.searchSelectableCategories(term)));

        if (this._id != 0) {
            this._bookService.getEntity(this._id);
        }
    }

    //при выборе издательства
    onSelectPublisher(e: TypeaheadMatch): void {
        let pubControl: AbstractControl = this.form.get(this._nh.nameof<BookDTO>("publisherID"));
        let publisher: Publisher = e.item as Publisher;
        pubControl.patchValue(publisher.id);
    }

    //при выборе категории
    onSelectCategory(e: TypeaheadMatch): void {
        let catControl: AbstractControl = this.form.get(this._nh.nameof<BookDTO>("categoryID"));
        let category: CategoryResponse = e.item as CategoryResponse;
        catControl.patchValue(category.id);
    } 

    onSubmit(): void {
        if (!this.form.valid) {
            return;
        }

        this.book = this.form.value;
        //update
        if (this.editing) {
            this._bookService.updateEntity(this.book);
        }//create
        else {
            this._bookService.createEntity(this.book)
            this.isAlertVisible = true;
            this.book = new BookDTO();
        }

        this.categoryName = "";
        this.publisherName = "";
        this.form.reset();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this._bookService.entity = null;
    }
}
