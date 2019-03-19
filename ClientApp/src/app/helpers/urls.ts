import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Urls {
    private baseoptionsUrl: string = `/api/options`;
    dataOptions: string = `${this.baseoptionsUrl}/dbServices`;
    seed: string = `${this.baseoptionsUrl}/seed`;

    private basecategoryUrl: string = `/api/category`;
    storeCategories: string = `${this.basecategoryUrl}/storecategories`;

    private basebookUrl: string = `/api/book`;
    books: string = `${this.basebookUrl}/books`;
    book: string = `${this.basebookUrl}/book`;
}
