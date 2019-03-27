import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { QueryOptions } from "../../models/dataDTO/queryOptions";
import { FilterProperty } from '../../viewModels/filterProperty';

@Component({
    selector: 'table-head',
    templateUrl: './table-head.component.html',
})
export class TableHeadComponent implements OnChanges {
    @Input() property: FilterProperty = null;
    @Input() sortPropName: string = null;
    @Output() sortingEvent = new EventEmitter<QueryOptions>();

    name: string = "";
    sortPropertyName: string = null;
    descendingOrder: boolean = false;
    isActive: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        let fp = changes["property"];
        let sp = changes["sortPropName"];
        if (fp != undefined && fp.currentValue != fp.previousValue) {
            this.name = this.property.name;
            this.sortPropertyName = this.property.property;
        }

        if (sp != undefined && sp.currentValue != sp.previousValue) {
            this.isActive = sp.currentValue == this.sortPropertyName ? true : false;
            this.descendingOrder = false;
        }
    }

    onSort(): void {
        if (this.isActive) {
            this.descendingOrder = !this.descendingOrder;
        }
        
        let options: QueryOptions = new QueryOptions();
        options.sortPropertyName = this.sortPropertyName;
        options.descendingOrder = this.descendingOrder;

        this.sortingEvent.emit(options);
    }
}
