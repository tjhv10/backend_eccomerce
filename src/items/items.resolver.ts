import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ItemService } from './items.service';
import { ItemStatus } from './items-status.enum';
import { Items } from './items.entity';

@Resolver(() => Items)
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query(() => Items)
  getItemById(@Args('id') id: number) {
    return this.itemService.getItemById(id);
  }

  @Query(() => [Items])
  getItems() {
    return this.itemService.getItems();
  }
  @Query(() => Boolean)
  isIdExist(@Args('id') id: number) {
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
  updateItemStatus(@Args('id') id: number, @Args('price') status: ItemStatus) {
    return this.itemService.updateItemStatus(id, status);
  }
}
