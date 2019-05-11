import { NgModule } from "@angular/core";

import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { ValidationComponent } from './validation.component';
import { ServerValidationComponent } from './server-validation.component';

@NgModule({
    imports: [
        BrowserModule        
    ],
    exports: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent
    ],
    declarations: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent
    ],
    providers: [],
})
export class SharedModule { }
