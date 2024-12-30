import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Items } from '../../items/src/item/items.entity';
import { CreatePostInput } from './dto/create-order.input';

@Resolver(() => Items)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Items)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.orderService.create(createPostInput);
  }

  // @Query(() => [Items], { name: 'posts' })
  // findAll(@CurrentUser() user: User) {
  //   console.log(user);
  //   return this.orderService.findAll();
  // }

  @Query(() => Items, { name: 'post' })
  findOne(@Args('id') id: string) {
    return this.orderService.findOne(id);
  }

  // @ResolveField(() => User)
  // user(@Parent() post: Items): any {
  //   return { __typename: 'User', id: post.authorId };
  // }
}
