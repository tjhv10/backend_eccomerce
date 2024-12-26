import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { ItemService } from './items.service';
import { ItemStatus } from '../items/items-status.enum';
import { Items } from './items.entity';
import { IDataloaders } from '../dataloader/dataloader.interface';
import { ItemsCategoriesService } from 'src/Item_Category/ItemCategory.service';

@Resolver(() => Items)
export class ItemResolver {
  itemCategoryService: ItemsCategoriesService;
  constructor(private itemService: ItemService) {}

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

  @ResolveField('Categories', () => [String])
  async getFriends(
    @Parent() item: Items,
    @Context() { loaders }: { loaders: IDataloaders },
  ) {
    const { id } = item;
    const categoriesIds =
      this.itemCategoryService.getItemsCategoriesByItemId(id);

    // console.log(categoriesIds);

    return loaders.itemCategoryLoader.load(id);
  }
}
