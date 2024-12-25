import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Items_Categories } from './Item_Category.entity';
import { Items_CategoriesService } from './Item_Category.service';

@Resolver(() => Items_Categories)
export class Item_CategoriesResolver {
  constructor(private Items_CategoriesService: Items_CategoriesService) {}

  @Query(() => [Items_Categories])
  async getItems_Categories(): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_Categories();
  }

  @Query(() => [Items_Categories])
  async getItems_CategoriesById(
    @Args('id') id: number,
  ): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_CategoriesByItemId(id);
  }
}
