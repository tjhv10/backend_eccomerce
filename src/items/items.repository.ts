import { EntityRepository, Repository } from 'typeorm';
import { Items } from './item.entity';

@EntityRepository(Items)
export class ItemRepository extends Repository<Items> {}
