import { NgModule } from "@angular/core";
import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    exports: [PaginationComponent],
    declarations: [
        PaginationComponent
    ],
    providers: [],
})
export class SharedModule { }
