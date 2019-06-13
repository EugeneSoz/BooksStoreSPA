import { Publisher } from '../data/publisher';
import { PublisherDTO } from '../data/DTO/publisherDTO';

export class EntityExtensions {
    mapPublisherDTO(publisher: Publisher): PublisherDTO {
        return new PublisherDTO(publisher.id, publisher.name, publisher.country);
    }
}
