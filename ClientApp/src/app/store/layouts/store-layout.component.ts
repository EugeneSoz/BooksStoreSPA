import { Component } from "@angular/core";
import { StoreService } from '../shared/store.service';

@Component({
    templateUrl: './store-layout.component.html',
    providers: [StoreService]
})
export class StoreLayoutComponent { }
