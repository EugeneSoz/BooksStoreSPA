import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Urls {
    private baseoptionsUrl: string = `/api/options`;
    dataOptions: string = `${this.baseoptionsUrl}/dbServices`;
    seed: string = `${this.baseoptionsUrl}/seed`;

    private baseCategoryUrl: string = `/api/category`;
    storeCategories: string = `${this.baseCategoryUrl}/storecategories`;
    categories: string = `${this.baseCategoryUrl}/categories`;
    category: string = `${this.baseCategoryUrl}/category`;

    private baseBookUrl: string = `/api/book`;
    books: string = `${this.baseBookUrl}/books`;
    book: string = `${this.baseBookUrl}/book`;

    private basePublisherUrl: string = `/api/publisher`;
    publishers: string = `${this.basePublisherUrl}/publishers`;
    publisher: string = `${this.basePublisherUrl}/publisher`;
}
