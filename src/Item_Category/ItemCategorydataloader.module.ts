import DataLoader from 'dataloader';
import { Injectable } from '@nestjs/common';
import { NestDataLoader } from 'nestjs-dataloader';
import { ItemsCategories } from './ItemCategory.entity';
import { ItemsCategoriesService } from './itemCategory.service';

@Injectable()
export class ItemCategoryLoader
  implements NestDataLoader<number, ItemsCategories[]>
{
  constructor(private categoryService: ItemsCategoriesService) {}

  generateDataLoader(): DataLoader<number, ItemsCategories[]> {
    return new DataLoader<number, ItemsCategories[]>(async (ids) => {
      return await Promise.all(
        ids.map((id) => this.categoryService.getItemsCategoriesByItemId(id)),
      );
    });
  }
}
