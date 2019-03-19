export class QueryOptions {
    constructor(
        public currentPage?: number,
        public pageSize?: number,
        public sortPropertyName?: string,
        public descendingOrder?: boolean,
        public searchPropertyName?: string,
        public searchTerm?: string,
        public filterPropertyName?: string,
        public filterPropertyValue?: number | null) { }

        resetToDefault()
        {
            this.currentPage = 1;
            this.pageSize = 12;
            this.sortPropertyName = "";
            this.descendingOrder = false;
            this.searchPropertyName = "";
            this.searchTerm = "";
            this.filterPropertyName = "";
            this.filterPropertyValue = null;
        }
}
