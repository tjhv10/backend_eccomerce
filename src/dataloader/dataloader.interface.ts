import DataLoader from 'dataloader';

export interface IDataloaders {
  itemCategoryLoader: DataLoader<number, String[]>;
}
