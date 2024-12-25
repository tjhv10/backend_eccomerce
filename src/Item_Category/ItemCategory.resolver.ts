import { Resolver, Query, Args } from '@nestjs/graphql';
import { ItemsCategories } from './ItemCategory.entity';
import { ItemsCategoriesService } from './ItemCategory.service';

@Resolver(() => ItemsCategories)
export class ItemCategoriesResolver {
  constructor(private ItemsCategoriesService: ItemsCategoriesService) {}

  @Query(() => [ItemsCategories])
  async getItemsCategories(): Promise<ItemsCategories[]> {
    return this.ItemsCategoriesService.getItemsCategories();
  }

  @Query(() => [ItemsCategories])
  async getItemsCategoriesById(
    @Args('id') id: number,
  ): Promise<ItemsCategories[]> {
    return this.ItemsCategoriesService.getItemsCategoriesByItemId(id);
  }
}
