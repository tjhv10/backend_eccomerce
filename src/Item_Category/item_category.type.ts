/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType('items_categories')
@InputType({ isAbstract: true })
export class Item_CategoryType {
  @Field(() => ID)
  Category_Id: number;
  @Field(() => ID)
  Item_Id: number;
}
