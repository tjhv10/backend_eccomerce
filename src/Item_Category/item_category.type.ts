import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('items_categories')
export class Item_CategoryType {
  @Field(() => ID)
  Category_Id: number;
  @Field(() => ID)
  Item_Id: number;
}
