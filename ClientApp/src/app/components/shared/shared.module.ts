import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { PaginationComponent } from './pagination.component';
import { ValidationComponent } from './validation.component';
import { ServerValidationComponent } from './server-validation.component';

@NgModule({
    imports: [
        CommonModule,
        TooltipModule.forRoot()
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
