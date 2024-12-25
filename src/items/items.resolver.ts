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
import * as DataLoader from 'dataloader';
import { Loader } from 'nestjs-dataloader';
import { ItemCategoryLoader } from '../Item_Category/itemCategorydataloader.module';

@Resolver(() => Items)
export class ItemResolver {
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

  // TODO: add dataloader
  @ResolveField(() => [Category])
  async Categories(
    @Parent() item: Items,
    @Loader(ItemCategoryLoader)
    categoryLoader: DataLoader<Category['id'], Category>,
  ) {
    const id = await categoryLoader.load(item.id);
    console.log(id);

    return id;
  }
}
