import DataLoader from 'dataloader';
import { ItemsCategories } from 'src/Item_Category/ItemCategory.entity';

export interface IDataloaders {
  itemCategoryLoader: DataLoader<number, String>;
}
