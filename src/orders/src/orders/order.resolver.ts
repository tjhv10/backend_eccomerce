import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Items } from './entities/items.entity';
import { Order } from './entities/order.entity';
// import { Items } from '../../items/src/item/items.entity';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Mutation(() => Boolean)
  async deleteItem(@Args('id') id: number): Promise<boolean> {
    return this.orderService.deleteItem(id);
  }
}
