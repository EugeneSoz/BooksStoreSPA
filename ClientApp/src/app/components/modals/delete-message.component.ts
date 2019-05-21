import { Component, OnInit } from "@angular/core";
import { PublisherService } from '../../services/publisher.service';
import { BsModalRef } from 'ngx-bootstrap/modal'
import { EntityType } from '../../enums/entityType';
import { Publisher } from '../../models/dataDTO/publisher';
import { DeletionService } from '../../services/deletion.service';
import { DeletionEventArgs } from '../../models/events/DeletionEventArgs';

@Component({
    selector: 'app-delete-message',
    templateUrl: './delete-message.component.html',
    providers: [PublisherService]
})
export class DeleteMessageComponent implements OnInit {
    constructor(
        private _publisherService: PublisherService,
        private _deletionService: DeletionService,
        public bsModalRef: BsModalRef) { }

    entityType: EntityType;
    entityId: number;

    get publisher(): Publisher {
        return this._publisherService.entity;
    }

    confirmationBtnTitle = "Да";
    cancelationBtnTitle = "Нет";

    get formHeader(): string {
        switch (this.entityType) {
            case EntityType.Category:
                return "Удаление категории";
            case EntityType.Publisher:
                return "Удаление издательства";
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
            default:
                return "";
        }
    }

    get objectName(): string {
        switch (this.entityType) {
            //case EntityType.Category:
            //    return this.category.name;
            case EntityType.Publisher:
                return this.publisher.name;
            default:
                return "";
        }
    }

    ngOnInit(): void {
        if (this.entityType == EntityType.Publisher) {
            this._publisherService.getEntity(this.entityId);
        }
        //else {
        //    this._taskService.getTask(this.entityId);
        //}
    }

    onDelete(): void {
        if (this.entityType == EntityType.Publisher) {
            this._deletionService.publisherDeleted.next(new DeletionEventArgs(this.publisher));
        }
        //else {
        //    this._taskService.deleteTask();
        //}
        this.onCancel();
    }

    onCancel(): void {
        this.bsModalRef.hide();
    }
}
