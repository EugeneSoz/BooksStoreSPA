import { Component, OnInit } from "@angular/core";

import { BsModalRef } from 'ngx-bootstrap/modal';

import { PublisherService } from '../../services/publisher.service';
import { EntityType } from '../../enums/entityType';
import { Publisher } from '../../models/dataDTO/publisher';
import { DeletionService } from '../../services/deletion.service';
import { DeletionEventArgs } from '../../models/events/DeletionEventArgs';
import { CategoryService } from '../../services/category.service';
import { BookService } from '../../services/book.services';
import { Category } from '../../models/dataDTO/category';
import { Book } from '../../models/dataDTO/book';

@Component({
    selector: 'app-delete-message',
    templateUrl: './delete-message.component.html',
    providers: [
        PublisherService,
        CategoryService,
        BookService
    ]
})
export class DeleteMessageComponent implements OnInit {
    constructor(
        private _publisherService: PublisherService,
        private _categoryService: CategoryService,
        private _bookService: BookService,
        private _deletionService: DeletionService,
        public bsModalRef: BsModalRef) { }

    entityType: EntityType;
    entityId: number;

    get publisher(): Publisher {
        return this._publisherService.entity;
    }

    get category(): Category {
        return this._categoryService.entity;
    }

    get book(): Book {
        return this._bookService.entity;
    }

    confirmationBtnTitle = "Да";
    cancelationBtnTitle = "Нет";

    get formHeader(): string {
        switch (this.entityType) {
            case EntityType.Category:
                return "Удаление категории";
            case EntityType.Publisher:
                return "Удаление издательства";
            case EntityType.Book:
                return "Удаление книги";
            default:
                return "";
        }
    }

    get question(): string {
        switch (this.entityType) {
            case EntityType.Category:
                return "Вы действительно хотите удалить категорию?";
            case EntityType.Publisher:
                return "Вы действительно хотите удалить издательство?";
            case EntityType.Book:
                return "Вы действительно хотите удалить книгу?";
            default:
                return "";
        }
    }

    get objectName(): string {
        switch (this.entityType) {
            case EntityType.Category:
                return this.category.name;
            case EntityType.Publisher:
                return this.publisher.name;
            case EntityType.Book:
                return this.book.title;
            default:
                return "";
        }
    }

    ngOnInit(): void {
        if (this.entityType == EntityType.Publisher) {
            this._publisherService.getEntity(this.entityId);
        }
        else if (this.entityType == EntityType.Category) {
            this._categoryService.getEntity(this.entityId);
        }
        else {
            this._bookService.getEntity(this.entityId);
        }
    }

    onDelete(): void {
        if (this.entityType == EntityType.Publisher) {
            this._deletionService.publisherDeleted.next(new DeletionEventArgs(this.publisher));
        }
        else if (this.entityType == EntityType.Category) {
            this._deletionService.categoryDeleted.next(new DeletionEventArgs(this.category));
        }
        else {
            this._deletionService.bookDeleted.next(new DeletionEventArgs(this.book));
        }
        this.onCancel();
    }

    onCancel(): void {
        this.bsModalRef.hide();
    }
}
