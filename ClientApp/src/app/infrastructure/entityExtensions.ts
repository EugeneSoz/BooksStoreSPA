import { Publisher } from '../data/publisher';
import { PublisherDTO } from '../data/DTO/publisherDTO';
import { Category } from '../data/category';
import { CategoryDTO } from '../data/DTO/categoryDTO';
import { BookDTO } from '../data/DTO/bookDTO';
import { BookResponse } from '../data/DTO/bookResponse';

export class EntityExtensions {
    mapPublisherDTO(publisher: Publisher): PublisherDTO {
        return new PublisherDTO(publisher.id, publisher.name, publisher.country);
    }

    mapCategoryDTO(category: Category): CategoryDTO {
        return new CategoryDTO(category.id, category.name, category.parentCategoryID);
    }

    mapBookDTO(book: BookResponse): BookDTO {
        return new BookDTO(book.id, book.title, book.authors, book.year, book.language, book.pageCount,
            book.description, book.price, book.bookCover, book.categoryID, book.publisherID);
    }
}
