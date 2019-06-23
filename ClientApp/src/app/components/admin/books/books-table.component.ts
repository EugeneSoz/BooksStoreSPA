import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookService } from '../../../services/book.services';
import { EntityType } from '../../../enums/entityType';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageLink } from '../../../enums/pageLink';
import { BaseTable } from '../../../models/baseSelection';
import { BookResponse } from '../../../data/DTO/bookResponse';
import { BookDTO } from '../../../data/DTO/bookDTO';
import { EntityExtensions } from '../../../infrastructure/entityExtensions';
import { DeleteMessageComponent } from '../../modals/delete-message.component';

@Component({
    templateUrl: './books-table.component.html',
})
export class BooksTableComponent extends BaseTable<BookResponse, BookResponse, BookDTO>
    implements OnInit, OnDestroy {

    constructor(
        bookService: BookService,
        private modalService: BsModalService) {

        super(bookService, EntityType.Book, modalService, `/${PageLink.admin_books}`);
    }

    bookDTO: BookDTO = null;
    modalRef: BsModalRef = null;

    onShowDeleteModal(book: BookResponse): void {
        let ee: EntityExtensions = new EntityExtensions();
        this.bookDTO = ee.mapBookDTO(book);
        const initialState = {
            entityType: EntityType.Book,
            objectName: book.title
        }

        this._subscriptions.push(
            this.modalService.onHide.subscribe(() => {
                if (this.modalRef != null &&
                    (this.modalRef.content as DeleteMessageComponent).result == "delete") {
                    this._service.deleteEntity(this.bookDTO);
                }
                this.unsubscribe();
            })
        );

        this.modalRef = this.modalService.show(DeleteMessageComponent, { initialState });
    }

    unsubscribe(): void {
        this._subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
        this._subscriptions = new Array<Subscription>();
    }
}
