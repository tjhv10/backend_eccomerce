/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ItemStatus } from './items-status.enum';

@ObjectType('Items')
export class Items {
  @Field(() => ID)
  Id: number;

  @Field(() => String)
  Name: string;

  @Field(() => Date)
  Upload_date: Date;

  @Field(() => String)
  Description: string;

  @Field(() => Int)
  Price: number;

  @Field(() => String)
  Seller_name: string;

  @Field(() => String)
  Image_url: string;

  @Field(() => ItemStatus)
  Status: ItemStatus;
}
