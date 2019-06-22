import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Urls {
    private baseoptionsUrl: string = `/api/options`;
    dataOptions: string = `${this.baseoptionsUrl}/services`;
    options_seed: string = `${this.baseoptionsUrl}/seed`;
    options_apply: string = `${this.baseoptionsUrl}/apply`;
    options_save: string = `${this.baseoptionsUrl}/save`;
    options_clear: string = `${this.baseoptionsUrl}/clear`;
    options_context: string = `${this.baseoptionsUrl}/context`;

    private baseCategoryUrl: string = `/api/category`;
    storeCategories: string = `${this.baseCategoryUrl}/storecategories`;
    categories: string = `${this.baseCategoryUrl}/categories`;
    parentCategories: string = `${this.baseCategoryUrl}/parentcategories`;
    category: string = `${this.baseCategoryUrl}/category`;
    category_create: string = `${this.baseCategoryUrl}/create`;
    category_update: string = `${this.baseCategoryUrl}/update`;
    category_delete: string = `${this.baseCategoryUrl}/delete`;
    categoriesForSelection: string = `${this.baseCategoryUrl}/categoriesforselection`;

    private baseBookUrl: string = `/api/book`;
    books: string = `${this.baseBookUrl}/books`;
    book: string = `${this.baseBookUrl}/book`;
    book_create: string = `${this.baseBookUrl}/create`;
    book_update: string = `${this.baseBookUrl}/update`;
    book_delete: string = `${this.baseBookUrl}/delete`;

    private basePublisherUrl: string = `/api/publisher`;
    publishers: string = `${this.basePublisherUrl}/publishers`;
    publisher: string = `${this.basePublisherUrl}/publisher`;
    publisher_create: string = `${this.basePublisherUrl}/create`;
    publisher_update: string = `${this.basePublisherUrl}/update`;
    publisher_delete: string = `${this.basePublisherUrl}/delete`;
    publishersForSelection: string = `${this.basePublisherUrl}/publishersforselection`;

    private baseSessionUrl: string = `/api/session`;
    session: string = `${this.baseSessionUrl}/cart`;

    private baseOrderUrl: string = `/api/orders`;
    orders: string = `${this.baseOrderUrl}`;

    private baseAccountUrl: string = `/api/acount`;
    login: string = `${this.baseAccountUrl}/login`;
    logout: string = `${this.baseAccountUrl}/logout`;

    private basePropertyUrl: string = "api/properties";
    pub_filter: string = `${this.basePropertyUrl}/pub_filter`;
    pub_sorting: string = `${this.basePropertyUrl}/pub_sorting`;
    cat_filter: string = `${this.basePropertyUrl}/cat_filter`;
    cat_sorting: string = `${this.basePropertyUrl}/cat_sorting`;
    book_filter: string = `${this.basePropertyUrl}/book_filter`;
    book_sorting: string = `${this.basePropertyUrl}/book_sorting`;
}
