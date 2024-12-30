import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  order_date: Date;
}
