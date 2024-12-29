import { InputType, Field, Int } from '@nestjs/graphql';
import { ItemStatus } from '../items-status.enum';

@InputType()
export class CreateItemDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  upload_date: Date;

  @Field()
  description: string;

  @Field(() => Int)
  price: number;

  @Field()
  seller_name: string;

  @Field()
  image_url: string;

  @Field(() => ItemStatus)
  status: ItemStatus;
}
