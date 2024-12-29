import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { ItemsCategoriesService } from '../Item_Category/ItemCategory.service';
import { Category } from '../category/categories.entity';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly itemsCategoriesService: ItemsCategoriesService,
  ) {}

  getLoaders(): IDataloaders {
    const itemCategoryLoader = this._createNamesLoader();
    return {
      itemCategoryLoader,
    };
  }

  private _createNamesLoader() {
    let as;
    return new DataLoader<number, Category[]>(
      async (keys: readonly number[]) => {
        const categories =
          await this.itemsCategoriesService.getNamesOfCategoriesByBatch(
            keys as number[],
          );
        return categories.map((categoryArray) =>
          categoryArray.map((category) => category),
        );
      },
    );
  }
}
