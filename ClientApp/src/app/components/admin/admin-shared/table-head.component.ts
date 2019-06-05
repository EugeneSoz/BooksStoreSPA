import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { QueryOptions } from "../../../models/dataDTO/queryOptions";
import { FilterSortingProps } from '../../../models/dataDTO/filterSortingProps';

@Component({
    selector: 'table-head',
    templateUrl: './table-head.component.html',
})
export class TableHeadComponent implements OnChanges {
    @Input() property: FilterSortingProps = null;
    @Input() sortPropertyName: string = "";
    @Output() sortingEvent = new EventEmitter<QueryOptions>();

    descendingOrder: boolean = false;
    isActive: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        let p = changes["sortPropertyName"];

        if (p != null && p.currentValue != p.previousValue) {
            this.isActive = p.currentValue == this.property.propertyName ? true : false;
            this.descendingOrder = false;
        }
    }

    onSort(): void {
        if (this.isActive) {
            this.descendingOrder = !this.descendingOrder;
        }
        
        let options: QueryOptions = new QueryOptions();
        options.sortPropertyName = this.property.propertyName;
        options.descendingOrder = this.descendingOrder;

        this.sortingEvent.emit(options);
    }
}
