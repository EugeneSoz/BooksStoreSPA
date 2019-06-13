import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { PaginationComponent } from './pagination.component';
import { ValidationComponent } from './validation.component';
import { ServerValidationComponent } from './server-validation.component';
import { RangeValidatorDirective } from '../../directives/range.directive';

@NgModule({
    imports: [
        CommonModule,
        TooltipModule.forRoot()
    ],
    exports: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent,
        RangeValidatorDirective
    ],
    declarations: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent,
        RangeValidatorDirective
    ],
    providers: [],
})
export class SharedModule { }
