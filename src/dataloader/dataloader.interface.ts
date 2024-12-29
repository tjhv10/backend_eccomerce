import DataLoader from 'dataloader';
import { Category } from 'src/categories/categories.entity';

export interface IDataloaders {
  itemCategoryLoader: DataLoader<number, Category[]>;
}
