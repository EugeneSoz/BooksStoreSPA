import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DeletionEventArgs } from '../models/events/DeletionEventArgs';
import { Publisher } from '../models/dataDTO/publisher';

@Injectable({providedIn: "root"})
export class DeletionService {
    publisherDeleted: Subject<DeletionEventArgs<Publisher>> = new Subject<DeletionEventArgs<Publisher>>();
}
