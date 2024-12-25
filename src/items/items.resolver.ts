import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ItemService } from './items.service';
import { ItemStatus } from '../items/items-status.enum';
import { Items } from './items.entity';
import { Category } from '../categories/categories.entity';
import { CategoryService } from '../categories/categories.service';
import { ItemsCategoriesService } from '../Item_Category/ItemCategory.service';

@Resolver(() => Items)
export class ItemResolver {
  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private itemCategoryService: ItemsCategoriesService,
  ) {}

  @Query(() => Items)
  async getItemById(@Args('id') id: number): Promise<Items> {
    return this.itemService.getItemById(id);
  }

  @Query(() => [Items])
  getItems() {
    return this.itemService.getItems();
  }

  @Query(() => Boolean)
  doesIdExist(@Args('id') id: number) {
    return this.itemService.isIdExist(id);
  }

  @Mutation(() => Items)
  deleteItem(@Args('id') id: number) {
    return this.itemService.deleteItem(id);
  }

  @Mutation(() => Items)
  updateItemPrice(@Args('id') id: number, @Args('price') price: number) {
    return this.itemService.updateItemPrice(id, price);
  }

  @Mutation(() => Items)
  updateItemStatus(@Args('id') id: number, @Args('status') status: ItemStatus) {
    return this.itemService.updateItemStatus(id, status);
  }

  // TODO: add dataloader
  @ResolveField(() => [Category])
  async Categories(@Parent() item: Items) {
    const { id } = item;
    const categoriesIds =
      this.itemCategoryService.getItemsCategoriesByItemId(id);
    let categoryNames = [];
    categoryNames = await Promise.all(
      (await categoriesIds).map(async (category) => {
        return this.categoryService.getCategoryById(category.categoryId);
      }),
    );
    return categoryNames;
  }
}
