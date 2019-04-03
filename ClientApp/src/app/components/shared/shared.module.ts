import { NgModule } from "@angular/core";

import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { ValidationComponent } from './validation.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        PaginationComponent,
        ValidationComponent
    ],
    declarations: [
        PaginationComponent,
        ValidationComponent
    ],
    providers: [],
})
export class SharedModule { }
