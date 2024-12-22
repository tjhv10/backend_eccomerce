/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/camelcase */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
// import { Item_CategoryType } from './item_category.type';
import { Items_Categories } from './Item_Category.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Items_CategoriesService } from './Item_Category.service';

@Resolver(() => Items_Categories)
export class Item_CategoriesResolver {
  constructor(private Items_CategoriesService: Items_CategoriesService) {}

  @Query(() => [Items_Categories])
  async getItems_Categories(): Promise<boolean> {
    return this.Items_CategoriesService.getItems_Categories()
      .then(() => true)
      .catch(() => false);
  }

  @Query(() => [Items_Categories])
  async getItems_CategoriesById(@Args('id') id: number): Promise<boolean> {
    return this.Items_CategoriesService.getItems_CategoriesByItemId(id)
      .then(() => true)
      .catch(() => false);
  }
  @Mutation(() => Boolean)
  async deleteItems_CategoriesByItemId(
    @Args('id') id: number,
  ): Promise<boolean> {
    return this.Items_CategoriesService.deleteItems_CategoriesByItemId(id)
      .then(() => true)
      .catch(() => false);
  }
}
