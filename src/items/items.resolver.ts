import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ItemService } from './items.service';
import { ItemStatus } from 'src/items/items-status.enum';
import { Items } from './items.entity';
import { Category } from 'src/categories/categories.entity';
import { CategoryService } from 'src/categories/categories.service';
import { Items_CategoriesService } from 'src/Item_Category/Item_Category.service';

@Resolver(() => Items)
export class ItemResolver {
  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private item_category_service: Items_CategoriesService,
  ) {}

  @Query(() => Items)
  async getItemById(@Args('id') id: number) {
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
  deleteItems_CategoriesByItemId(@Args('id') id: number) {
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
      this.item_category_service.getItems_CategoriesByItemId(id);
    let category_names = [];
    for (let i = 0; i < (await categoriesIds).length; i++) {
      category_names.push(
        await this.categoryService.getCategoryById(
          (await categoriesIds)[i].categoryId,
        ),
      );
    }
    return category_names;
  }
}
