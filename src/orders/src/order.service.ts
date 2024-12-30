import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  private readonly posts: Order[] = [];

  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  // forAuthor(authorId: string) {
  //   return this.posts.filter((post) => post.authorId === authorId);
  // }
}
