import { Publisher } from '../data/publisher';
import { PublisherDTO } from '../data/DTO/publisherDTO';
import { Category } from '../data/category';
import { CategoryDTO } from '../data/DTO/categoryDTO';

export class EntityExtensions {
    mapPublisherDTO(publisher: Publisher): PublisherDTO {
        return new PublisherDTO(publisher.id, publisher.name, publisher.country);
    }

    mapCategoryDTO(category: Category): CategoryDTO {
        return new CategoryDTO(category.id, category.name, category.parentCategoryID);
    }
}
