/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';

@ObjectType('Items')
export class Items {
  @Field(() => ID)
  Id: number;

  @Field()
  Name: string;

  @Field()
  Upload_date: Date;

  @Field()
  Description: string;

  @Field()
  Price: number;

  @Field()
  Seller_name: string;

  @Field()
  Image_url: string;

  @Field()
  Status: ItemStatus;
}
