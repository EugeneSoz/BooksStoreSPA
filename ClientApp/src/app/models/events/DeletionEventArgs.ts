import { EntityType } from '../../enums/entityType';

export class DeletionEventArgs<TEntity> {
    constructor(
        public entity: TEntity) { }
}
