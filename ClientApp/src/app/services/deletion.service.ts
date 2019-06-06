import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DeletionEventArgs } from '../models/events/DeletionEventArgs';
import { Publisher } from '../data/publisher';
import { Category } from '../data/category';
import { Book } from '../data/book';

@Injectable({providedIn: "root"})
export class DeletionService {
    publisherDeleted: Subject<DeletionEventArgs<Publisher>> = new Subject<DeletionEventArgs<Publisher>>();
    categoryDeleted: Subject<DeletionEventArgs<Category>> = new Subject<DeletionEventArgs<Category>>();
    bookDeleted: Subject<DeletionEventArgs<Book>> = new Subject<DeletionEventArgs<Book>>();
}
