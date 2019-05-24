import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DeletionEventArgs } from '../models/events/DeletionEventArgs';
import { Publisher } from '../models/dataDTO/publisher';
import { Category } from '../models/dataDTO/category';
import { Book } from '../models/dataDTO/book';

@Injectable({providedIn: "root"})
export class DeletionService {
    publisherDeleted: Subject<DeletionEventArgs<Publisher>> = new Subject<DeletionEventArgs<Publisher>>();
    categoryDeleted: Subject<DeletionEventArgs<Category>> = new Subject<DeletionEventArgs<Category>>();
    bookDeleted: Subject<DeletionEventArgs<Book>> = new Subject<DeletionEventArgs<Book>>();
}
