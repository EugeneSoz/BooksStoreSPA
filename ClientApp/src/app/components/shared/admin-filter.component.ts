import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { FilterProperty } from '../../viewModels/filterProperty';
import { QueryOptions } from '../../models/dataDTO/queryOptions';

@Component({
    selector: 'admin-filter',
    templateUrl: './admin-filter.component.html',
})
export class AdminFilterComponent implements OnChanges {
    @Input() properties: Array<FilterProperty> = null;
    @Input() term: string = null;
    @Output() searchEvent = new EventEmitter<QueryOptions>();

    searchProperyName: string;
    searchTerm: string = null;
    get isClearBtnVisible(): boolean {
        return this.term == null ? false : true;
    }

    ngOnChanges(changes: SimpleChanges): void {
        let props = changes["properties"];
        if (props != undefined && props.currentValue != props.previousValue) {
            this.searchProperyName = this.properties[0].property;
        }
    }

    onSelectProperty(property: string): void {
        this.searchProperyName = property;
    }

    onInputSearchValue(value: string): void {
        this.searchTerm = value;
    }

    onSearch(clear: boolean = false): void {
        let options: QueryOptions = new QueryOptions();
        if (clear) {
            options.searchPropertyNames = null;
            options.searchTerm = null;
        }
        else {
            options.searchPropertyNames = new Array<string>(this.searchProperyName);
            options.searchTerm = this.searchTerm;
        }

        this.searchEvent.emit(options);
    }

    onClear(): void {
        this.searchTerm = null;
        this.onSearch(true);
    }
}