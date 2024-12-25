import DataLoader from 'dataloader';
import { Injectable } from '@nestjs/common';
import { NestDataLoader } from 'nestjs-dataloader';
import { ItemsCategories } from './ItemCategory.entity';
import { ItemsCategoriesService } from './ItemCategory.service';

@Injectable()
export class ItemCategoryLoader
  implements NestDataLoader<number, ItemsCategories[]>
{
  constructor(private readonly categoryService: ItemsCategoriesService) {}

  generateDataLoader(): DataLoader<number, ItemsCategories[]> {
    return new DataLoader<number, ItemsCategories[]>(async (ids) => {
      return await Promise.all(
        ids.map((id) => this.categoryService.getItemsCategoriesByItemId(id)),
      );
    });
  }
}

// @Injectable()
// export class AccountLoader implements NestDataLoader<string, Account> {
//   constructor(private readonly accountService: AccountService) {}

//   generateDataLoader(): DataLoader<string, Account> {
//     return new DataLoader<string, Account>((keys) =>
//       this.accountService.findByIds(keys),
//     );
//   }
// }
