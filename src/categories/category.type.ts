import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('categories')
export class CategoryType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
