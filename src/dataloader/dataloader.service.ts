import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { ItemsCategoriesService } from 'src/Item_Category/ItemCategory.service';

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
    return new DataLoader<number, String>(
      async (keys: readonly number[]) =>
        await this.itemsCategoriesService.getNamesOfCategoriesByBatch(
          keys as number[],
        ),
    );
  }
}
