import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './components/pagination.component';
import { ValidationComponent } from './components/validation.component';
import { ServerValidationComponent } from './components/server-validation.component';
import { RangeValidatorDirective } from './directives/range.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent,
        RangeValidatorDirective,
    ],
    declarations: [
        PaginationComponent,
        ValidationComponent,
        ServerValidationComponent,
        RangeValidatorDirective,
    ],
    providers: [],
})
export class SharedModule { }
